import "./Modal.css";
import {toggleContext} from "./ModalBtn";
import { useContext } from "react";


export default function ModalBG({})
{
    const[toggle,setToggle] = useContext(toggleContext);
    return(
        <>
        
        <div className="BG" onClick={()=>{setToggle(false)}}></div>
        
        </>
    )
}