interface props {
    type: string;
}

export const TransactionForm = ({ type }: props) => {

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const data = new FormData(event.target)

        console.log(data)
    }

    return (
        <dialog open>
            <form onSubmit={handleSubmit}>
                <label htmlFor="amount">Monto</label>
                <input type="text" name="amount" />
                <label htmlFor="description">Descripción</label>
                <input type="text" name="description" />
                <label htmlFor="created_at">Fecha</label>
                <input type="text" name="amount" />
                <button>Registrar</button>
            </form>
        </dialog>
    )
}