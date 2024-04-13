
import './style.css'
import { NavLink } from 'react-router-dom';
function Navbar()
{
    const sitePages=[
        { name: "Exit", path: "/"},
        { name: "Store", path: "/MainPage/Store" },
        { name: "Cart", path: "/MainPage/Cart" },
        {name:"Exit",path:"/MainPage/Exit"},
        {name:"BatchBuy",path:"/MainPage/BatchBuy"}
    ]

    return (
       
        <nav className='nav'>
            <ul>
                <li className='Title-font'>Quick-Buy</li>               
            </ul>
           <ul>
         {sitePages.map((page,index)=>(
                 <li key={page.name}><NavLink to={page.path}>{page.name}</NavLink></li> 
            ))}
            <li className='userIcon'>
            🥸
            </li>
           </ul>
        </nav>
        
    );
}
export default Navbar;