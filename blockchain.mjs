import Block from "./block.mjs";
import Miner from "./miner.mjs";
import Mempool from "./mempool.mjs";
import Transaction from "./transaction.mjs";

class Blockchain {
  constructor() {
    this.chain = [];
  }

  createGenesisBlock(){
    const genesisBlock = Block.createBlock(1, "0", "0", "0", []);
    {
      this.addBlock(genesisBlock);
    }
  }

  getChain() {
    console.log(this.chain);
  }

  addBlock(block) {
    this.chain.push(block);
  }

  getLastBlock(){
    return this.chain[this.chain.length -1];
  }
}

export default Blockchain;

const blockchain = new Blockchain();
blockchain.createGenesisBlock();

const mempool = new Mempool();
const miner = new Miner(mempool, blockchain);

const transaction = new Transaction(1, "Alex", "Anna");
mempool.addTransaction(transaction);

console.log("Mempool pendingTransactions:", mempool.getPendingTransactions());

const newBlock = miner.mineBlock();

console.log("New block mined:", newBlock);

console.log(newBlock.getTransactions());

blockchain.getChain();




