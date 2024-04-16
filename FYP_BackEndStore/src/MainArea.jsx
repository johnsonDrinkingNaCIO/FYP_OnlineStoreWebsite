import SelectorBar from "./Compoents/SelectorBar.jsx";

import { Outlet } from "react-router-dom"
import axios, {isCancel, AxiosError} from 'axios';
import { useEffect, useState } from "react";

import './App.css'

export default function MainArea ()
{
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const api= 'http://localhost/api.php';

  /*  useEffect(
        ()=>
        {
            const fetchData = async()=>
            {
                try
                {
                    setLoading(true);
                    const result= await axios.get(api);
                    setData(result.data);

                }catch (error)
                {
                    setError(error);
                    console.log(error);
                } finally{
                    setLoading(false);
                }
            };

            fetchData();

           
        } 
    ) */


    return(
      <> 
      <div className="wrapper squarePadding">
      <Outlet></Outlet>
      <div className="bgImage"></div>
    
      </div>
      </>

    )
}