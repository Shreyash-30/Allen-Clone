import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
export default function Layout() {
    return(
        <>
            <Navbar />
           
                <Outlet />
          
            <Footer />
        </>
    )
}
