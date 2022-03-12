import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Input from './Input/Input.jsx';

const Register = () => {
   const [visible, setVisible] = useState(false)

   const handleClick = () => {
      setVisible(!visible)
   }

   return (<>
      <form>
         <Input type="text" text="Name" />
         <Input type="text" text="Email" />
         <Input type={visible ? 'text' : 'password'} text="Password"
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            handleClick={handleClick}
         />
         <Input type={visible ? 'text' : 'password'} text="Confirm Password"
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            handleClick={handleClick}
         />
         <div className="login_btn">
            <button>register</button>
         </div>
      </form>
   </>);
}

export default Register;