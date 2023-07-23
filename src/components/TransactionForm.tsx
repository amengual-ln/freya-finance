import { useState } from "react";
import { useTransactions } from "../stores/transactions";
import { Transaction } from '../types/Transaction'
import { useForm } from 'react-hook-form'

interface props {
    type: 'expense' | 'income' | 'investment';
    handleClose: () => void;
}

type FormData = {
    amount: number,
    description: string,
    created_at: string
}

export const TransactionForm = ({ type, handleClose }: props) => {
    const [showOptionals, setShowOptionals] = useState(false)
    const { register, handleSubmit } = useForm<FormData>()
    const addTransaction = useTransactions(state => state.addTransaction)

    const onSubmit = handleSubmit(data => {
        const newTransaction: Transaction = {
            ...data,
            type,
            id: crypto.randomUUID()
        }
        addTransaction(newTransaction)
        handleClose()
    })

    return (
        <>
            <div onClick={() => handleClose()} className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]"></div>

            <form onSubmit={onSubmit} className="z-50 fixed top-1/2 left-0 right-0 transform -translate-y-1/2 flex flex-col gap-2 bg-white p-8 mx-4 rounded-xl bg-background">
                <h2 className="text-center font-medium text-xl">{type === 'expense' ? 'Gasto' : 'Ingreso'}</h2>
                <label className="font-medium text-sm mt-3 -mb-2" htmlFor="amount">Monto</label>
                <input {...register('amount')} type="text" name="amount" inputMode="numeric" placeholder="$0" className="text-center text-2xl bg-transparent focus:text-primary px-2 py-1 my-1 outline-none hover:border-primary/50 focus:bg-secondary focus:border-primary transition duration-300" />
                <label className="font-medium text-sm mt-3 -mb-2" htmlFor="description">Descripción</label>
                <input {...register('description')} type="text" name="description" className="bg-transparent border-b-2 border-secondary px-2 py-1 my-1 outline-none hover:border-primary/50 focus:bg-secondary focus:border-primary transition duration-300" />
                {showOptionals &&
                    <>
                        <label className="font-medium text-sm mt-3 -mb-2" htmlFor="created_at">Fecha</label>
                        <input {...register('created_at')} type="text" name="created_at" className="bg-transparent border-b-2 border-secondary px-2 py-1 my-1 outline-none hover:border-primary/50 focus:bg-secondary focus:border-primary transition duration-300" />
                    </>
                }
                <button type="button" onClick={() => setShowOptionals(!showOptionals)} className="p-1 mt-2 rounded-md text-black outline-none hover:opacity-90 transition">
                    {showOptionals ? '⌃' : '⌄'}
                </button>

                <input type="submit" value="Registrar" className="p-2 mt-2 rounded-md bg-primary text-white outline-none hover:opacity-90 transition" />
            </form>
        </>
    )
}
