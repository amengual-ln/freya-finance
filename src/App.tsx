import { useTransactions } from './stores/transactions'
import { LatestTransactions } from './components/LatestTransactions'
import { TransactionForm } from './components/TransactionForm'

function App() {
  const fetchTransactions = useTransactions(state => state.fetchTransactions)

  fetchTransactions(5)

  return (
    <>
      <section>
        <section className="flex justify-evenly gap-2 my-3">
          <div className="bg-white justify-self-auto p-4 rounded-lg">Ingreso</div>
          <div className="bg-white justify-self-auto p-4 rounded-lg">34230</div>
          <div className="bg-white justify-self-auto p-4 rounded-lg">Egreso</div>
        </section>
        <LatestTransactions />
      </section>
      {/* <TransactionForm type="expense"/> */}
    </>
  )
}

export default App
