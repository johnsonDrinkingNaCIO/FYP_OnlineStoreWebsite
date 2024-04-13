import '../cssFiles/index.css'
import '../index.css';

import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";


export const BatchBuy=() =>
{
    const data = useLoaderData();
    console.log(data[0].body);
   
    return(
        <>
        <div className='main-content'>
       { data.map( (e,i) => <div key={i}>{e.body}</div> ) }
       </div>
        </>

    )
};