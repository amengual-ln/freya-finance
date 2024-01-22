import { PageWrapper } from "./PageWrapper"
import { InvestmentsIcon, HomeIcon, DebtsIcon } from "./Icons"
import { Link, useLocation } from "react-router-dom"

export const BottomNav = () => {
    const { pathname } = useLocation()

    return (
        <section className="fixed bottom-0 w-full bg-gray-50">
            <PageWrapper>
                <div className="flex justify-evenly">
                    <Link to="/investments" className={`p-4 text-gray-400 hover:text-primary transition ${pathname === '/investments' ? 'text-primary' : ''}`}>
                        <InvestmentsIcon />
                    </Link>
                    <Link to="/" className={`p-4 text-gray-400 hover:text-primary transition ${pathname === '/' ? 'text-primary' : ''}`}>
                        <HomeIcon />
                    </Link>
                    <Link to="/debts" className={`p-4 text-gray-400 hover:text-primary transition ${pathname === '/debts' ? 'text-primary' : ''}`}>
                        <DebtsIcon />
                    </Link>
                </div>
            </PageWrapper>
        </section>
    )
}