C++FLAG = -g -Wall -std=c++14
INCLUDES = -I ./lib/

ECC_OBJ = src/ecc.o
KEYS_OBJ = src/keys.o
GEN_KEYS_OBJ = src/gen_keys.o
SEND_TXN_OBJ = src/send_txn.o
BALANCE_OBJ = src/balance.o

EXEC_DIR = ./bin

.cpp.o:
	g++ $(C++FLAG) -c $< -o $@ $(INCLUDES)

all: gen_keys.o send_txn.o balance.o

GEN_KEYS = gen_keys.o
$(GEN_KEYS): $(GEN_KEYS_OBJ) $(KEYS_OBJ) $(ECC_OBJ)
	g++ $(C++FLAG) -o $(EXEC_DIR)/$@ $(GEN_KEYS_OBJ) $(KEYS_OBJ) $(ECC_OBJ)

SEND_TXN = send_txn.o
$(SEND_TXN): $(SEND_TXN_OBJ)
	g++ $(C++FLAG) -o $(EXEC_DIR)/$@ $(SEND_TXN_OBJ)

BALANCE = balance.o
$(BALANCE): $(BALANCE_OBJ)
	g++ $(C++FLAG) -o $(EXEC_DIR)/$@ $(BALANCE_OBJ)

clean:
	(rm -f *.o;)
	(rm -f src/*.o;)
	(rm -f bin/*.o;)
