import { TransactionItem } from './TransactionItem'
import { useTransactions } from '../stores/transactions'
import { Transaction } from '../types/Transaction'
import { Link } from 'react-router-dom'

export const LatestTransactions = () => {
    const transactions = useTransactions(state => state.transactions)

    return (
        <article className="shadow-freya rounded-2xl m-4">
            <article className="p-3 bg-gray-50 rounded-t-2xl">
                <h2 className="font-medium text-lg m-3">Últimos movimientos</h2>
                <ul>
                    {transactions.slice(0, 5).map((transaction: Transaction) => (
                        <TransactionItem transaction={transaction} key={transaction.id} />
                    ))}
                </ul>
            </article>
            <div className="flex justify-center border-t bg-gray-50 rounded-b-2xl">
                <Link to="/transactions" className="p-3 w-full text-center">Ver más</Link>
            </div>
        </article>
    )
}