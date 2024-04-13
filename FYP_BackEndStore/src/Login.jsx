// Login.js
import { motion } from 'framer-motion';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import  axios  from 'axios';



export default function Login() {
  
  const nav = useNavigate();
    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 1.3,
      };
    
      

      const pageVariants = {
        initial: { opacity: 0, x: "-100%" },
        enter: { opacity: 1, x: "0%" },
        exit: { opacity: 0, x: "100%" },
      };
    
      function handleSubmit(event)
    {
      event.preventDefault();

      const userExsists = true;
     
      if(!userExsists)
      {

        console.log(import.meta.env.VITE_API_CALL_LOGIN);
        
          axios.get(import.meta.env.VITE_API_CALL_LOGIN)
        .then(response => {
          const data = response.data; // Assuming the response data is a boolean value
          console.log(data);
      if (data === 1) {
        // If the response is true
        nav("/MainArea");
      } else {
      console.log("LoginFailed");
      }
        })
        .catch(error => {
            // Handle error
            console.log(error);
        });

    }else
    {
      nav("/MainArea");
    }
       
    
    }

function VerifyLogin()
{

}

      return (
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}        
        >
          <h1>Login</h1>
          <form className='stylizedForm' onSubmit={handleSubmit} >
            Name: <input type='text'></input>
            Password: <input type='text'></input>
            <br></br>
            <button type='submit'>submit</button>
          </form>
          <Link to="/">Back</Link>
        </motion.div>
      );
}

