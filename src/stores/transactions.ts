import { create } from 'zustand'
import { Transaction } from '../types/Transaction'
import supabase from '../database'
import dayjs from 'dayjs'

interface TransactionState {
    transactions: Transaction[],
    balance: number,
    fetchTransactions: (limit?: number) => void,
    addTransaction: (transaction: Transaction) => void,
    getBalance: () => void
}

export const useTransactions = create<TransactionState>()(set => ({
    transactions: [],
    balance: 0,
    fetchTransactions: async (limit?) => {
        const { data: transactions, error } = await supabase.from('transactions').select().order('created_at', { ascending: false })
        const fetchedTransactions = transactions?.map(transaction => {
            return transaction as Transaction
        })
        set({
            transactions: fetchedTransactions ?? []
        })
    },
    addTransaction: async (transaction: Transaction) => {
        const rawDate = transaction.created_at ? transaction.created_at.split('/') : null

        const created_at = rawDate ? dayjs(`${rawDate[2]}/${rawDate[1]}/${rawDate[0]}`).toISOString() : dayjs().toISOString()

        transaction.amount = Number(transaction.amount.toString().replace('.', '').replace('$', ''))

        const newTransaction = {
            ...transaction,
            created_at,
            id: transaction.id || ''
        }
        set((state) => ({
            transactions: [newTransaction, ...state.transactions]
        }))

        const { error } = await supabase.from('transactions').insert(newTransaction)
    },
    getBalance: async () => {
        const { data: amounts } = await supabase.from('transactions').select('type, amount')

        const balance = amounts?.reduce((total, transaction) => {
            if (transaction.type === 'income') {
                return total += transaction.amount
            } else {
                return total -= transaction.amount
            }
        }, 0)
        set(() => ({
            balance: balance
        }))
    }
}))
