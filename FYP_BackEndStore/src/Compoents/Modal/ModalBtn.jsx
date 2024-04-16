import { createContext, useState } from "react";

import "./Modal.css";
import ModalBG from "./ModalBG";
import ModalBody from "./ModalBody";

export const toggleContext =  createContext()

export default function ModalBtn({})
{
    const[toggle,setToggle]= useState(false);

    function toggler()
    {
       
        setToggle(!toggle);
    }

    return(
        <>
        <toggleContext.Provider value={[ toggle, setToggle ]}>
            <button onClick={toggler}>POP OUT</button>
            {toggle && <ModalBG/>}
            {toggle && <ModalBody></ModalBody>}
        </toggleContext.Provider>
        </>
    )
}