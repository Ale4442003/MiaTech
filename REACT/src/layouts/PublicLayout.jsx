import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <div className="page-render-box" >
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default PublicLayout;