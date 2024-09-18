import sha256 from "sha256";
import Block from "./block.mjs";

class Miner {
  constructor(mempool, blockchain) {
    this.mempool = mempool;
    this.blockchain = blockchain;
  }

  hashBlock(previousBlockHash, currentBlockTransactions, nonce) {
    const dataAsString =
      previousBlockHash +
      nonce.toString() +
      JSON.stringify(currentBlockTransactions);
    const hash = sha256(dataAsString);
    return hash;
  }

  proofOfWork(previousBlockHash, currentBlockTransactions) {
    let nonce = 0;
    let hash = this.hashBlock(
      previousBlockHash,
      currentBlockTransactions,
      nonce
    );
    while (hash.substring(0, 4) !== "0000") {
      nonce++;
      hash = this.hashBlock(previousBlockHash, currentBlockTransactions, nonce);
      //console.log(hash);
    }
    return nonce;
  }

  mineBlock() {
    const lastBlock = this.blockchain.getLastBlock();

    const previousBlockHash = lastBlock.hash;

    const newIndex = lastBlock.index + 1;

    const transactions = this.mempool.getPendingTransactions();

    const nonce = this.proofOfWork(previousBlockHash, transactions);

    const blockHash = this.hashBlock(previousBlockHash, transactions, nonce);

    const newBlock = Block.createBlock(
      newIndex,
      nonce,
      blockHash,
      previousBlockHash,
      transactions
    );

    this.mempool.clearPendingTransactions();
    this.blockchain.addBlock(newBlock);
    this.confirmTransactions(newBlock.transactions);

    return newBlock;
  }

  confirmTransactions(transactions) {
    for (const transaction of transactions) {
      transaction.isConfirmed = true;
    }
  }
}

export default Miner;
