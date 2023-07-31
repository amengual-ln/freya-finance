import { useTransactions } from "../stores/transactions"

export const Balance = () => {
    const balance = useTransactions(state => state.balance)

    return (
        <section className="flex justify-center">
            <div className="justify-self-auto p-4 text-2xl"><span className='opacity-75 text-lg'>$</span>
                {balance.toFixed(2).toString()}
            </div>
        </section>
    )
}