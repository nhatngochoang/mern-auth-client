import { useState } from 'react';
import Appbar from '../components/Appbar/Appbar.jsx'
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Feed from '../components/Feed/Feed.jsx'

const Profile = () => {
   const [sidebar, setSidebar] = useState(false);

   const handleSidebar = () => {
      setSidebar(!sidebar);
   };

   return (
      <div className="profilelayout">
         {/* appbar */}
         <Appbar handleSidebar={handleSidebar} />
         {/* sidebar */}
         <div className={sidebar ? "profilelayout_sidebar open" : "profilelayout_sidebar"}>
            <Sidebar />
         </div>
         {/* content */}
         <div className="profilelayout_content">
            {/* feed */}
            <div className="profilelayout_content-feed">
               <Feed />
            </div>
            {/* profile */}
         </div>
      </div>
   );
}

export default Profile;