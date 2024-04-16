import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

import { Link, Outlet, Route, useLocation } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ScreenLooker from './Compoents/ScreenLooker'
import { AnimatePresence } from 'framer-motion';
import Login from './Login'
import './App.css'
import { Example } from './Compoents/Example'

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Define the callback function that will be fired when an observation occurs
    const callback = (entries) => {
      entries.forEach((entry) => {

        console.log(entry);
        // Perform more actions based on the intersection status
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    };

    // Create the IntersectionObserver instance
    const observer = new IntersectionObserver(callback);

    // Now, you need to tell the observer which elements to observe.
    // For example, let's observe all elements with the class 'observe-me'
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((el) => observer.observe(el));

    // Clean up the observer on unmount
    return () => observer.disconnect();
  }, []); // The empty dependency array ensures this effect runs once on mount.

  return (
    <>

      <div className='sticky-element'>

        <Link to="/Login" className='left' >👈
          :Login</Link>
        <div className='right'>👉</div>
      </div>



      <motion.div className="wrapper"
        initial={{ filter: 'blur(20px)' }}
        animate={{ filter: 'blur(0px)' }}
        exit={{ x: '50%', filter: 'blur(20px)', transition: { duration: 0.5 } }}

        transition={{ duration: 0.3 }}
      >

        <div className="bgImage"></div>



        <div className='OneFullPage flex-center'>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className='hidden'>QuickBuy</h1>
          <div className="card">
           
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
        <div className=' OneFullPage flex-center leftText somePadding'>
          <div className='left'>
            <h1 className=' hidden glowing-text'>About Us:</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ullam nesciunt. Harum quibusdam ipsam voluptatem. Dolore, autem! Alias molestias amet adipisci aliquid optio nihil vitae laboriosam eius explicabo, voluptates blanditiis animi provident. Doloribus beatae autem iure hic deserunt incidunt ipsa libero obcaecati, ad, impedit quaerat eligendi. Quibusdam, praesentium quisquam reiciendis magnam, excepturi vero quia voluptates inventore mollitia omnis ea error! Reprehenderit iure quam iste laborum hic corrupti aut. Ea ratione sequi unde soluta illum voluptatum similique quibusdam quae. Cum fugit quasi dolore praesentium commodi non optio, obcaecati hic maxime laborum vel natus fugiat exercitationem rem iste doloribus nostrum alias laudantium!
            </div>
          </div>
        </div>
        <div className='OneFullPage flex-center somePadding'>
          <h1 className='hidden'>Our Goals</h1>
          <section className='WideContainer'>
            <div className='items'></div>
            <motion.div className='items'
              initial={{ opacity: 0, top: 0 }}
              animate={{ opacity: 1, top: 50 }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 3
              }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit libero natus modi illo alias sit nisi animi non tenetur.</motion.div >
            <div className='items'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae itaque quidem soluta debitis sit at hic quae totam ut eaque nesciunt, est, nihil quia iste voluptas perferendis tenetur officia ratione.</div>
            <ScreenLooker initals={{ opacity: 0.5 }} Anim_values={{ opacity: 1 }}></ScreenLooker>
          </section>
        </div>


      </motion.div>

      <div className='sticky-element'>

        <Outlet />


      </div>

    </>
  )
}

export default App
