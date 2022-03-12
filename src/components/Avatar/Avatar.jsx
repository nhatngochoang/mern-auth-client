import './avatar.scss'

const Avatar = ({ size }) => {
   return (
      <div className="avatar">
         <img
            src="https://source.unsplash.com/collection/happy-people"
            alt="avatar"
            className={size === 'large' ? "img-size-lg" : size === 'medium' ? "img-size-md" : ""}
         />
      </div>
   );
}

export default Avatar;