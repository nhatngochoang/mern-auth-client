import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Activate = ({ history }) => {
   const { activation_token } = useParams();
   const handleClick = () => {
      history.push("/");
   };

   useEffect(() => {
      // check token
      if (activation_token) {
         const activateUser = async () => {
            try {
               const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/activation`, {
                  activation_token,
               });
               toast(res.data.msg, {
                  className: "toast-success",
                  bodyClassName: "toast-success",
               });
            } catch (err) {
               console.log(err);
               toast(err.response.data.msg, {
                  className: "toast-failed",
                  bodyClassName: "toast-failed",
               });
            }
         };
         activateUser();
      }
   }, [activation_token]);

   return (<>
      <div className="activate">
         <ToastContainer />
         <p>
            ready to login ? 👉🏻 <span onClick={handleClick}>Here</span>
         </p>
      </div>
   </>);
}

export default Activate;