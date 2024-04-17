import { Link,Route, Routes, useLocation} from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import App from './App.jsx'
import Login from './Login.jsx';
import MainArea from "./MainArea.jsx"

import BulkBuy from "./Pages/BulkBuy.jsx";
import Store from "./Pages/Store.jsx";
import Options from "./Pages/OptionsPage/Options.jsx";
import SelectorBar from "./Compoents/SelectorBar.jsx";
import CartPage from "./Pages/CartPage.jsx";

export default function Routing()
{ const location = useLocation();
    return(
        <>
       {location.pathname.startsWith('/MainArea') && <SelectorBar/> }
        <AnimatePresence mode="wait" >
       
        <Routes location={location}
            key={location.pathname}
        >
        <Route path="/" element={<App/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/MainArea" element={<MainArea />}>
                    <Route path="BulkBuy" element={<BulkBuy />} />
                    <Route path="Store" element={<Store />} />
                    <Route path="Options" element={<Options />} />
                    <Route path="Cart" element={<CartPage />} />
                </Route>
        </Routes>
        </AnimatePresence>
        </>
    )
}