import { create } from 'zustand'
import { Transaction } from '../types/Transaction'
import supabase from '../database'

interface TransactionState {
    transactions: Transaction[],
    fetchTransactions: (limit: number) => void,
    addTransaction: (transaction: Transaction) => void
}

export const useTransactions = create<TransactionState>()(set => ({
    transactions: [],
    fetchTransactions: async (limit: number = 10) => {
        console.log('fetching transactions')
        const { data: transactions, error } = await supabase.from('transactions').select().limit(limit).order('created_at', { ascending: false })
        const fetchedTransactions = transactions?.map(transaction => {
            return transaction as Transaction
        })
        set({
            transactions: fetchedTransactions ?? []
        })
    },
    addTransaction: async (transaction: Transaction) => {
        set((state) => ({
            transactions: [...state.transactions, transaction]
        }))
        const newTransaction = {
            ...transaction,
            id: transaction.id || ''
        }
        const { error } = await supabase.from('transactions').insert(newTransaction)
    }
}))