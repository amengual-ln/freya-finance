interface props {
    children: React.ReactNode
}

export const PageWrapper = ({ children }: props) => {
    return (
        <div className="max-w-screen-lg mx-auto">
            {children}
        </div>
    )
}