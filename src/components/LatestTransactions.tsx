import { TransactionItem } from './TransactionItem'
import { useTransactions } from '../stores/transactions'
import { Transaction } from '../types/Transaction'

export const LatestTransactions = () => {
    const transactions = useTransactions(state => state.transactions)

    return (
        <article className="shadow-freya rounded-2xl">
            <article className="p-3 bg-gray-50 rounded-t-2xl">
                <h2 className="font-medium text-lg m-3">Últimos movimientos</h2>
                <ul>
                    {transactions.map((transaction: Transaction) => (
                        <TransactionItem transaction={transaction} key={transaction.id} />
                    ))}
                </ul >
            </article>
            <div className="flex justify-center border-t bg-gray-50 rounded-b-2xl">
                <button className="p-3 w-full">Ver más</button>
            </div>
        </article>
    )
}