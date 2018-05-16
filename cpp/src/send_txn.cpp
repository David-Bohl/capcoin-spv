#include "keys.h"

using namespace std;

int main(int argc, char *argv[]) {
  // Usage: ./send_txn <prk> <pbk> <to> <amt>
  if(argc != 5)
    return 1;

  stringstream ss;

  ss << "\"SPV-TXN\":{";

  ss << "\"KEYPAIR\":{\"PRK\":\"" << argv[1] << "\",\"PBK\":\"" << argv[2] << "\"},";

  ss << "\"TO\":" << "\"" << argv[3] << "\",";

  ss << "\"AMT\":" << "\"" << argv[4] << "\"}";

  cout << ss.str() << endl;
}
