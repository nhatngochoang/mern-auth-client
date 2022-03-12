import { useState } from "react";
import Forgot from "../components/Forgot.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";

const Auth = () => {
   const [auth, setAuth] = useState('login')
   const handleShowLogin = () => {
      setAuth('login')
   }
   const handleShowRegister = () => {
      setAuth('register')
   }
   const handleShowForgot = () => {
      setAuth('forgot')
   }
   return (
      <div className="authlayout">
         {/* logo */}
         <div className="authlayout_logo">
            <img src="./assets/img/shuttle.svg" alt="logo" />
         </div>
         {/* form */}
         {auth === 'login' && <Login />}
         {auth === 'register' && <Register />}
         {auth === 'forgot' && <Forgot />}
         {/* actions */}
         <div className="authlayout_actions">
            {auth !== 'login' && <p className="authlayout_actions-l"
               onClick={handleShowLogin}>login?</p>}
            {auth !== 'register' && <p className="authlayout_actions-l"
               onClick={handleShowRegister}>register?</p>}
            {auth !== 'forgot' && <p className="authlayout_actions-r"
               onClick={handleShowForgot}>forgot ?</p>}
         </div>
      </div>
   );
}

export default Auth;