#include <stdio.h>
#include <unistd.h>
#include <sys/socket.h>
#include <stdlib.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <string.h>
#include <signal.h>
#include <sys/time.h>
#include <errno.h>
#include <sstream>
#include <iostream>
#define PORT 1025

using namespace std;

int main(int argc, char *argv[]) {
  // Usage: ./send_txn <prk> <pbk> <to> <amt>
  if(argc != 5) {
      cout << "Usage: ./send_txn <prk> <pbk> <to> <amt>" << std::endl;
      return 1;
  }

  stringstream ss;

  ss << "\"SPV-TXN\":{";

  ss << "\"KEYPAIR\":{\"PRK\":\"" << argv[1] << "\",\"PBK\":\"" << argv[2] << "\"},";

  ss << "\"TO\":" << "\"" << argv[3] << "\",";

  ss << "\"AMT\":" << "\"" << argv[4] << "\"}";

  // cout << ss.str() << endl;

  int sock = 0, valread, activity;
  struct sockaddr_in serv_addr;
  char buffer[1025] = {0};

  string ip = "167.99.12.102";

  fd_set fds;

  if ((sock = socket(AF_INET, SOCK_STREAM, 0)) < 0)
  {
      printf("\n Socket creation error \n");
      return -1;
  }

  memset(&serv_addr, '0', sizeof(serv_addr));

  serv_addr.sin_family = AF_INET;
  serv_addr.sin_port = htons(PORT);

  // Convert IPv4 and IPv6 addresses from text to binary form
  if(inet_pton(AF_INET, ip.c_str(), &serv_addr.sin_addr)<=0)
  {
      printf("\nInvalid address/ Address not supported \n");
      return -1;
  }

  if (connect(sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0)
  {
      printf("\nConnection Failed \n");
      return -1;
  }

  send(sock, ss.str().c_str(), ss.str().size(), 0);

  while(1) {
    FD_ZERO(&fds);
    //add socket to set
    FD_SET(sock, &fds);

    activity = select( sock + 1 , &fds , NULL , NULL , NULL);

    if ((activity < 0) && (errno!=EINTR))
    {
        printf("select error");
    }

    if (FD_ISSET(sock, &fds))
    {
      valread = read(sock , buffer, 1024);
      if(valread == 0){
        close(sock);
        // printf("Connection closed by host\n");
        cout << "Connection closed" << endl;
      }
      else {
        buffer[valread] = '\0';
        string s = string(buffer);
        // fflush(stdout);
        if(s.substr(1,7) == "SPV-TXN"){
          cout << s << endl;
          close(sock);
          break;
        }
      }
    }
  }
  return 0;
}
