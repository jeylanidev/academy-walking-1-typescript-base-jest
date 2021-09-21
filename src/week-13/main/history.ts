
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

    transactions: Transaction[];

    constructor() {
        this.transactions = [];
    }

    getHistory(): Transaction[] {
        return this.transactions;
    }

    addTransactionToHistory(transaction: Transaction): void {
        this.transactions.push(transaction);
    }
};
