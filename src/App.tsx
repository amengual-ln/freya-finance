import { useTransactions } from './stores/transactions'
import { Balance } from './components/Balance'
import { LatestTransactions } from './components/LatestTransactions'
import { PageWrapper } from './components/PageWrapper'
import { BottomNav } from './components/BottomNav'
import { TransactionForm } from './components/TransactionForm'
import { useEffect, useState } from 'react'

function App() {
  const [transactionFormOpen, setTransactionFormOpen] = useState(false)
  const [transactionType, setTransactionType] = useState<'expense' | 'income' | 'investment'>('expense')
  const fetchTransactions = useTransactions(state => state.fetchTransactions)
  const getBalance = useTransactions(state => state.getBalance)

  useEffect(() => {
    fetchTransactions(5)
    getBalance()
  }, [])

  const openTransactionForm = (type: 'expense' | 'income' | 'investment') => {
    setTransactionType(type)
    setTransactionFormOpen(true)
  }

  return (
    <>
      <PageWrapper>
        <section>
          <Balance />
          <section className="flex justify-evenly gap-2 my-3">
            <button className="bg-secondary justify-self-auto py-4 px-6 rounded-lg" onClick={() => openTransactionForm('income')} >Ingreso</button>
            <button className="bg-secondary justify-self-auto py-4 px-6 rounded-lg" onClick={() => openTransactionForm('investment')}>Inversión</button>
            <button className="bg-secondary justify-self-auto py-4 px-6 rounded-lg" onClick={() => openTransactionForm('expense')}>Egreso</button>
          </section>
          <LatestTransactions />
        </section>
      </PageWrapper>
      <BottomNav></BottomNav>
      {transactionFormOpen &&
        <TransactionForm type={transactionType} handleClose={() => setTransactionFormOpen(false)} />
      }
    </>
  )
}

export default App
