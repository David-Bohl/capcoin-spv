#include <iostream>
#include <iomanip>
#include <string>
#include <sstream>

#include "ecc.h"

std::string keyToHexString(uint8_t* key, size_t no_bytes);
void keyToBytes(const std::string& hexKey, uint8_t* key);
std::pair<std::string, std::string> generateKeyPair();
