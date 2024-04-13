import React, { useState, useRef, useEffect } from "react";
import {useNavigate, NavLink} from "react-router-dom";
import './SelectorBar.css';

function SelectorBar() {
    const nav = useNavigate();
    const [active, setActive] = useState(true);
    const actionPromptRef = useRef(null);

    function handleClick(link)
    {
        setActive(!active);
        
        if(actionPromptRef.current)
        {
            console.log(actionPromptRef.current.innerText);
            actionPromptRef.current.style.setProperty('--visible',active?1:0);
        }
        nav(link);
    }

    const circlesData = [
        {
        imageUrl: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Options',
        target: '/MainArea/Options'
        },
        {
        imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Store',
        target: '/MainArea/Store'
        },
        {
        imageUrl: 'https://plus.unsplash.com/premium_photo-1681487872232-fa622a6dd59e?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Community BulkBuy',
        target: '/MainArea/BulkBuy'
        }
    ];

  return (
    <div className='SelectorBarDiv'>

      <h1 className='Actionpromt_h1' ref={actionPromptRef}>I would like to use...</h1>

      <div className='Container'>
        <div className='BubbleDivArea'>
          {
          circlesData.map((circle, index) => (
            <div onClick={()=>{handleClick(circle.target)}} key={index} className="BigCircle Funnyword">
              <div className='overlay-pattern'></div>
              <img src={circle.imageUrl} alt={circle.text} />
              <div className='innerText glowyText'>{circle.text}</div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
}



export default SelectorBar;