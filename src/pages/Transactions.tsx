import { Link } from "react-router-dom"
import { TransactionItem } from "../components/TransactionItem"
import { useTransactions } from "../stores/transactions"
import { Transaction } from "../types/Transaction"
import { PageWrapper } from "../components/PageWrapper"

export const Transactions = () => {
    const transactions = useTransactions(state => state.transactions)
    return (
        <PageWrapper>
            <div className="mt-4">
                <Link to="/" className="mx-4 p-4">{'< Volver'}</Link>
            </div>
            <div className="p-3 bg-gray-50 shadow-freya rounded-2xl m-4">
                <ul>
                    {transactions.map((transaction: Transaction) => (
                        <TransactionItem transaction={transaction} key={transaction.id} />
                    ))}
                </ul>
            </div>
        </PageWrapper>
    )
}