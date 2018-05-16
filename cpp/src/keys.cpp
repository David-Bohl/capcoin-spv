#include "keys.h"

std::string keyToHexString(uint8_t* key, size_t no_bytes) {
  std::stringstream ss;
  for(int i=0; i<no_bytes; i++) {
    ss << std::setfill('0') << std::setw(2) << std::hex << (unsigned int) key[i];
  }
  return ss.str();
}

void keyToBytes(const std::string& hexKey, uint8_t* key) {
  std::string hex_byte="";
  uint8_t x;

  for(int i=0; i< hexKey.size(); i++) {
    hex_byte += hexKey[i];

    if(i%2 != 0) {
      x = strtoul(hex_byte.c_str(), NULL, 16);
      hex_byte = "";
      key[i/2] = x;
    }
  }

}

std::pair<std::string, std::string> generateKeyPair() {
  uint8_t p_privateKey[ECC_BYTES];
  uint8_t p_publicKey[ECC_BYTES+1];

  if(!ecc_make_key(p_publicKey, p_privateKey))
    return std::make_pair("", "");

  std::string publicKey, privateKey;

  publicKey = keyToHexString(p_publicKey, ECC_BYTES+1);
  privateKey = keyToHexString(p_privateKey, ECC_BYTES);

  return std::make_pair(privateKey, publicKey);
}
