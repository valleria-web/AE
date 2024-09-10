class Blockchain{
    constructor(){
        this.chain = []
    }

    getChain(){
        console.log(this.chain)
    }
}

export default Blockchain;

const blockchain = new Blockchain();

blockchain.getChain();