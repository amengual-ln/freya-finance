import { Transaction } from '../types/Transaction'
import dayjs from 'dayjs'

interface props {
    transaction: Transaction
}

export const TransactionItem = ({ transaction }: props) => {
    return (
        <li className={`flex justify-between items-center px-4 py-2 my-2 rounded-lg ${transaction.type === 'income' ? 'hover:bg-green-100/30' : transaction.type === 'investment' ? 'hover:bg-yellow-100/30' : 'hover:bg-red-100/30'}`}>
            <span>{transaction.description}</span>
            <div className="flex flex-col text-end">
                <pre className={`${transaction.type === "income" ? 'text-green-400' : transaction.type === "investment" ? 'text-yellow-400' : 'text-red-400'}`}>
                    <>${transaction.amount}</>
                </pre>
                <pre className='text-sm opacity-25'>{dayjs(transaction.created_at).format("DD/MM/YYYY")}</pre>
            </div>
        </li>
    )
}