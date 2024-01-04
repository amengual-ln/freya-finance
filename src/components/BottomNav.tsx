import { PageWrapper } from "./PageWrapper"
import { InvestmentsIcon, HomeIcon, DebtsIcon } from "./Icons"
import { Link } from "react-router-dom"

export const BottomNav = () => {
    return (
        <section className="fixed bottom-0 w-full bg-gray-50">
            <PageWrapper>
                <div className="flex justify-evenly">
                    <Link to="/investments" className="p-4 text-gray-400 hover:text-primary transition">
                        <InvestmentsIcon />
                    </Link>
                    <Link to="/" className="p-4 text-gray-400 hover:text-primary transition">
                        <HomeIcon />
                    </Link>
                    <Link to="/debts" className="p-4 text-gray-400 hover:text-primary transition">
                        <DebtsIcon />
                    </Link>
                </div>
            </PageWrapper>
        </section>
    )
}