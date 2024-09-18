class Transaction{
    constructor(amount, sender, receiver){
        this.transactionID = this.generateRandomId();
        this.coinAmount = amount;
        this.senderPublicKey = sender;
        this.receiverPublicKey = receiver;
        this.isConfirmed = false;
    }

    generateRandomId(length = 8) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        return result;
      }
}

export default Transaction;