import { create } from 'zustand'
import { Transaction } from '../types/Transaction'
import supabase from '../database'
import dayjs from 'dayjs'

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
        const rawDate = transaction.created_at?.split('/')

        const created_at = rawDate ? dayjs(`${rawDate[1]}/${rawDate[0]}/${rawDate[2]}`).toISOString() : dayjs().toISOString()

        console.log(created_at)

        const newTransaction = {
            ...transaction,
            created_at,
            id: transaction.id || ''
        }
        set((state) => ({
            transactions: [newTransaction, ...state.transactions]
        }))

        const { error } = await supabase.from('transactions').insert(newTransaction)
    }
}))