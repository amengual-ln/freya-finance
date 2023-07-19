export type Transaction = {
    id?: string,
    type: 'expense' | 'income' | 'investment'
    description: string | null,
    amount: number,
    created_at: string | null
}