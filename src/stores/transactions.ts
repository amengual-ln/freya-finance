import { create } from 'zustand'
import { Transaction } from '../types/Transaction'
import supabase from '../database'

interface TransactionState {
    transactions: Transaction[],
    fetchTransactions: (limit: number) => void
}

export const useTransactions = create<TransactionState>()(set => ({
    transactions: [],
    fetchTransactions: async (limit: number = 10) => {
        const { data: transactions, error } = await supabase.from('transactions').select().limit(limit)

        console.log('hola')

        set({
            transactions: transactions ?? []
        })
    }
}))