class Coin{
    constructor(name, ticker, totalSupply){
        this.name = name;
        this.ticker = ticker;
        this.initialSupply = 0;
        this.actualSupply = this.initialSupply;
        this.totalSupply = totalSupply;
    }

    getCoin(){
        return{
            name: this.name,
            ticker: this.ticker,
            totalSupply: this.totalSupply,
            initialSupply: this.initialSupply,
            actualSupply: this.actualSupply,
        }
    }
}

export default Coin;

const bitcoin = new Coin("Bitcoin", "BTC", 21000);

console.log(bitcoin.getCoin());