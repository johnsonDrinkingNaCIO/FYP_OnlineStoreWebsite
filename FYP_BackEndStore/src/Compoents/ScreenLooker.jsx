import { animateValue, motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
export default function ScreenLooker({children,initals,Anim_values})
{
    const {clicked,useClick} = useState();
   const controls = useAnimation(); 

    const handleClick = ()=>
    {
        controls.start(Anim_values);
    }

    return (
        <motion.div
            initial={initals}
            animate={controls}
        >
            {children}
            <button onClick={handleClick}>Trigger</button>
        </motion.div>
    );
}