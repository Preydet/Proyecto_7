import { Outlet } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer";


const Layout = () => {
    return (
        <div className ="flex flex-col h-screen justify-between bg.slate-50">
            <Header />
            <main className="mb-auto">
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;