import { AiFillCamera } from "react-icons/ai";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useRef, useState } from "react";
import Avatar from "../Avatar/Avatar.jsx";
import Input from "../Input/Input.jsx";

const Profile = () => {
   const inputFile = useRef(null);
   const [visible, setVisible] = useState(false)

   const handleInput = () => {
      inputFile.current.click();
   };


   const handleClick = () => {
      setVisible(!visible)
   }


   return (
      <div className="profile">
         {/* avatar */}
         <div className="profile_avatar">
            <div className="profile_avatar-wrapper" onClick={handleInput}>
               <Avatar size="large" />
               <AiFillCamera />
            </div>
            <input
               type="file"
               name="avatar"
               ref={inputFile}
               className="profile_avatar-input"
            />
         </div>
         {/* form */}
         <form className="profile_input">
            <div className="profile_input-form">
               <Input type="text" text="Name" />
               <Input type="text" text="Email" />
               <Input type={visible ? 'text' : 'password'} text="Password"
                  icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
                  handleClick={handleClick} />
               <Input type={visible ? 'text' : 'password'}
                  icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
                  handleClick={handleClick} text="Confirm Password" />
               <div className="login_btn">
                  <button>update</button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default Profile;