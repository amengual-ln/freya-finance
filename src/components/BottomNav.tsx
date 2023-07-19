import { PageWrapper } from "./PageWrapper"
import { InvestmentsIcon, HomeIcon, DebtsIcon } from "./Icons"

export const BottomNav = () => {
    return (
        <section className="fixed bottom-0 w-full bg-gray-50">
            <PageWrapper>
                <div className="flex justify-evenly">
                    <span className="p-4 text-gray-400 hover:text-primary transition"><InvestmentsIcon /></span><span className="p-4 text-gray-400 hover:text-primary transition"><HomeIcon /></span><span className="p-4 text-gray-400 hover:text-primary transition"><DebtsIcon /></span>
                </div>
            </PageWrapper>
        </section>
    )
}