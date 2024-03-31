import { Outlet } from "react-router-dom";
import { BatchBuy } from "./BatchBuy";
import Footer from "../Compoents/Footer/Footer";
import Navbar from "../Compoents/NavBar/NavBar";
export const MainPage=() =>
{
    return(
        <>
        <Navbar/>
        <div>MainPage</div>
      
        <Outlet/>

        <Footer/>
        </>
    )
};