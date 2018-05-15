#include "keys.h"

using namespace std;

int main(int argc, char* argv[]) {
  if(argc != 3) return 1;

  cout << "\"KEYPAIR\":{\"PRK\":\"" << argv[1] << "\",\"PBK\":\"" << argv[2] << "\"}" << endl; 
  return 0;
}
