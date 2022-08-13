import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Activate from './Layouts/Activate.jsx';
import Auth from './Layouts/Auth.jsx'
import Profile from './Layouts/Profile.jsx'
import Reset from './Layouts/Reset.jsx';

function App() {
   const isLoggedIn = false
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
