import { Link,Route, Routes, useLocation} from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import App from './App.jsx'
import Login from './Login.jsx';
import MainArea from "./MainArea.jsx"

import BulkBuy from "./Pages/BulkBuy.jsx";
import Store from "./Pages/Store.jsx";
import Options from "./Pages/Options.jsx";

export default function Routing()
{ const location = useLocation();
    return(
        <AnimatePresence mode="wait" >
        <Routes location={location}
            key={location.pathname}
        >
        <Route path="/" element={<App/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/MainArea" 
        element={<MainArea/>}
        children={[
            <Route key={location.pathname} path="/MainArea/BulkBuy"
                element={<BulkBuy/>}
            >
            </Route>,
             <Route key={location.pathname} path="/MainArea/Store"
             element={<Store/>}
            >
            </Route>,
                <Route key={location.pathname} path="/MainArea/Options"
                element={<Options/>}
                >
            </Route>,
        ]}
        ></Route>
        </Routes>
        </AnimatePresence>
    )
}