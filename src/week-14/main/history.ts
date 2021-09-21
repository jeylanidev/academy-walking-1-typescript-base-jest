export type Transaction = {
    date: string;
    amount: string;
    balance: string;
}

export interface History {
    getHistory: () => Transaction[];
    addTransactionToHistory: (transaction: Transaction) => void;
}

export class TransactionHistory implements History {

    private transactions: Transaction[];

    constructor() {
        this.transactions = [];
    }

    addTransactionToHistory(transaction: Transaction): void {
        this.transactions.push(transaction);
    }

    getHistory(): Transaction[] {
        return this.transactions;
    }
}