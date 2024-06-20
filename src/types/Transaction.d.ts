export type Transaction = {
    id?: string,
    type: 'expense' | 'income' | 'investment',
    category?: 'super' | 'regalos' | 'servicios' | 'familia' | 'viajes' | 'transporte' | 'tickets' | 'salidas'
    description: string | null,
    amount: number,
    created_at: string | null
}