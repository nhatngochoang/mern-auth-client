import axios from "axios";
import { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from '../context/AuthContext.js';
import { isEmail, isEmpty } from "../helper/validate.js";
import Input from './Input/Input.jsx';
import GoogleLogin from "react-google-login";

const initialState = {
   name: "",
   password: "",
};

const Login = () => {
   const [visible, setVisible] = useState(false)
   const [data, setData] = useState(initialState);
   const { email, password } = data;
   const { dispatch } = useContext(AuthContext);

   const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
   };

   const handleClick = () => {
      setVisible(!visible)
   }

   const login = async (e) => {
      e.preventDefault();
      // check fields
      if (isEmpty(email) || isEmpty(password))
         return toast("Please fill in all fields.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
         });
      // check email
      if (!isEmail(email))
         return toast("Please enter a valid email addresss.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
         });
      try {
         await axios.post(`${process.env.REACT_APP_API_URL}/auth/signing`, { email, password });
         localStorage.setItem("_appSignging", true);
         dispatch({ type: "SIGNING" });
      } catch (err) {
         toast(err.response.data.msg, {
            className: "toast-failed",
            bodyClassName: "toast-failed",
         });
      }
   };

   const googleSuccess = async (res) => {
      const token = res?.tokenId;
      try {
         await axios.post(`${process.env.REACT_APP_API_URL}/auth/google_signing`, { tokenId: token });
         localStorage.setItem("_appSignging", true);
         dispatch({ type: "SIGNING" });
      } catch (err) {
         toast(err.response.data.msg, {
            className: "toast-failed",
            bodyClassName: "toast-failed",
         });
      }
   };

   const googleError = () => {
      toast("There was an error signing in, please try again later.", {
         className: "toast-failed",
         bodyClassName: "toast-failed",
      });
   };

   return (<>
      <ToastContainer />
      <form className="login" onSubmit={login}>
         <Input type="email"
            text="Email"
            name="email"
            handleChange={handleChange} />
         <Input type={visible ? 'text' : 'password'} name="password" text="Password"
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            handleClick={handleClick}
            handleChange={handleChange}
         />
         <div className="login_btn">
            <button type="submit">login</button>
            <GoogleLogin
               clientId={process.env.REACT_APP_G_CLIENT_ID}
               render={(renderProps) => (
                  <button
                     className="btn-alt"
                     onClick={renderProps.onClick}
                     disabled={renderProps.disabled}
                  >
                     sign in <FcGoogle />
                  </button>
               )}
               cookiePolicy={"single_host_origin"}
               onSuccess={googleSuccess}
               onFailure={googleError}
            />
         </div>
      </form>
   </>
   );
};

export default Login;