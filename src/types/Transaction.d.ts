export type Transaction = {
    id: string,
    type: string,
    description: string | null,
    amount: number,
    created_at: string | null
}