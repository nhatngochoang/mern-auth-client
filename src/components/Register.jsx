import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Input from './Input/Input.jsx';
import { isEmpty, isEmail, isLength, isMatch } from "../helper/validate.js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
   name: "",
   email: "",
   password: "",
   cf_password: "",
};

const Register = () => {
   const [visible, setVisible] = useState(false)
   const [data, setData] = useState(initialState);
   const { name, email, password, cf_password } = data;

   const handleClick = () => {
      setVisible(!visible)
   }

   const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
   };

   const register = async (e) => {
      e.preventDefault();
      // check fields
      if (isEmpty(name) || isEmpty(password))
         return toast("Please fill in all fields.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
         });
      // check email
      if (!isEmail(email))
         return toast("Please enter a valid email address.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
         });
      // check password
      if (isLength(password))
         return toast("Password must be at least 6 characters.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
         });
      // check match
      if (!isMatch(password, cf_password))
         return toast("Password did not match.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
         });
      try {
         const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
            name,
            email,
            password,
         });
         toast(res.data.msg, {
            className: "toast-success",
            bodyClassName: "toast-success",
         });
      } catch (err) {
         toast(err.response.data.msg, {
            className: "toast-failed",
            bodyClassName: "toast-failed",
         });
      }
      handleReset();
   };

   const handleReset = () => {
      Array.from(document.querySelectorAll("input")).forEach(
         (input) => (input.value = "")
      );
      setData({ ...data, name: "", email: "", password: "", cf_password: "" });
   };

   return (<>
      <ToastContainer />
      <form onSubmit={register}>
         <Input type="text" text="Name" name="name" handleChange={handleChange} />
         <Input type="text" text="Email" name="email" handleChange={handleChange} />
         <Input type={visible ? 'text' : 'password'} name="password" handleChange={handleChange} text="Password"
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            handleClick={handleClick}
         />
         <Input type={visible ? 'text' : 'password'} name="cf_password" handleChange={handleChange} text="Confirm Password"
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            handleClick={handleClick}
         />
         <div className="login_btn">
            <button type='submit'>register</button>
         </div>
      </form>
   </>);
}

export default Register;