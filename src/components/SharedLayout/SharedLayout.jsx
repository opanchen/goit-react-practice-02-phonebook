import { Outlet } from "react-router-dom"

export const SharedLayout = () => {
    return (
        <div>
            Layout...
            <Outlet />
        </div>
    )
}