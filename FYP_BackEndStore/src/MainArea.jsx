import SelectorBar from './Compoents/SelectorBar';

import { Outlet } from "react-router-dom"
import axios, {isCancel, AxiosError} from 'axios';
import { useEffect, useState } from "react";
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
      <SelectorBar/>
        <Outlet></Outlet>
      </>

    )
}