import axios from "axios";
import { useContext } from "react";
import { BiBookContent, BiLogOut, BiUserCircle } from "react-icons/bi";
import { AuthContext } from '../../context/AuthContext';

const Sidebar = () => {
   const { dispatch } = useContext(AuthContext);

   const handleClick = async (e) => {
      e.preventDefault();
      try {
         await axios.get(`${process.env.REACT_APP_API_URL}/auth/signout`);
         localStorage.removeItem("_appSignging");
         dispatch({ type: "SIGNOUT" });
      } catch (err) {
         console.log(err);
      }
   };

   return (<>
      <div className="sidebar">
         <div className="sidebar_menu">
            <ul>
               <li>
                  <BiBookContent />
                  <p>feed</p>
               </li>
               <li>
                  <BiUserCircle />
                  <p>profile</p>
               </li>
               <li onClick={handleClick}>
                  <BiLogOut />
                  <p>logout</p>
               </li>
            </ul>
         </div>
      </div>
   </>);
}

export default Sidebar;