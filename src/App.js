import axios from 'axios';
import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext.js';
import Activate from './Layouts/Activate.jsx';
import Auth from './Layouts/Auth.jsx';
import Profile from './Layouts/Profile.jsx';
import Reset from './Layouts/Reset.jsx';

function App() {
   const { dispatch, token, isLoggedIn } = useContext(AuthContext);

   axios.defaults.withCredentials = true

   // get ac token
   useEffect(() => {
      const _appSignging = localStorage.getItem("_appSignging");
      if (_appSignging) {
         const getToken = async () => {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/access`, null);
            dispatch({ type: "GET_TOKEN", payload: res.data.ac_token });
         };
         getToken();
      }
   }, [dispatch, isLoggedIn]);

   // get user data
   useEffect(() => {
      if (token) {
         const getUser = async () => {
            dispatch({ type: "SIGNING" });
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/user`, {
               headers: { Authorization: token },
            });
            dispatch({ type: "GET_USER", payload: res.data });
         };
         getUser();
      }
   }, [dispatch, token]);

   return (
      <Router>
         <Routes>
            <Route path='/' exact element={isLoggedIn ? <Profile /> : <Auth />} />
            <Route path='/auth/reset-password/:token' exact element={<Reset />} />
            <Route path='/api/auth/activate/:activation_token' exact element={<Activate />} />
         </Routes>
      </Router>
   );
}

export default App;
