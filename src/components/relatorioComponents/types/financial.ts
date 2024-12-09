export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
}

export interface FinancialSummary {
  income: number;
  expenses: number;
  balance: number;
}