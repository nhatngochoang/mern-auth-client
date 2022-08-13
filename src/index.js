import React from 'react';
import { CookiesProvider } from "react-cookie";
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext.js';
import './sass/index.scss';

ReactDOM.render(
   <React.StrictMode>
      <CookiesProvider>
         <AuthContextProvider>
            <App />
         </AuthContextProvider>
      </CookiesProvider>
   </React.StrictMode>,
   document.getElementById('root')
);

