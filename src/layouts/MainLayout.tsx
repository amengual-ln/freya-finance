import { BottomNav } from "../components/BottomNav"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <>
            <Outlet />
            <BottomNav />
        </>
    )
}