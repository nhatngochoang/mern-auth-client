import { default as ResetComponent } from '../components/Reset.jsx'
const Reset = () => {
   const handleClick = ({ history }) => {
      history.push("/");
   };
   return (<>
      <div className="authlayout">
         {/* logo */}
         <div className="authlayout_logo">
            <img src="../../assets/img/shuttle.svg" alt="logo" />
         </div>
         {/* form */}
         <ResetComponent />
         {/* actions */}
         <p className="reset_p" onClick={handleClick}>
            login ?
         </p>
      </div>
   </>);
}

export default Reset;