#include "keys.h"

using namespace std;

int main() {
  pair<string, string> keys = generateKeyPair();
  cout << keys.first << "\n" << keys.second << endl;
  return 0;
}
