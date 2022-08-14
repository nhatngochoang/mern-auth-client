import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import './avatar.scss';

const Avatar = ({ size, avatar }) => {
   const { user } = useContext(AuthContext);

   return (
      <div className="avatar">
         <img
            src={avatar ? avatar : user.avatar}
            alt="avatar"
            className={size === 'large' ? "img-size-lg" : size === 'medium' ? "img-size-md" : ""}
         />
      </div>
   );
}

export default Avatar;