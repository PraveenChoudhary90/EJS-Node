import Footer from "./Component/Footer";
import TopNav from "./Component/TopNav";
import {Outlet} from "react-router-dom";

const Layout = ()=>{
    return(
        <>
        <TopNav/>
        <main style={{margin:"30px"}}>
            <Outlet/>
        </main>
        <Footer/>
        
        </>
    )
}

export default Layout;