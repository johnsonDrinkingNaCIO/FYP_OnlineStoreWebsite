import { Outlet } from "react-router-dom";
import { BatchBuy } from "./BatchBuy";
import Footer from "../Compoents/Footer/Footer";
import Navbar from "../Compoents/NavBar/NavBar";
import '../cssFiles/index.css'
export const MainPage=() =>
{
    return(
       <>
        <Navbar/>
        <div className='main-content-parent'>
        <div className="SideBar">
            <h1>MainPage</h1>
            <h1>MainPage</h1>
            <h1>MainPage</h1>
        </div>
        
        <Outlet/>
        </div>
        <Footer/>
       </>
    )
};