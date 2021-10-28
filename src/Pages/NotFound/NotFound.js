import React from 'react';
import './NotFound.css';
import errorPage from '../../banner/404.jpg'

const NotFound = () => {
     return (
          <div className="container text-center">
               <img src={errorPage} alt="" />
          </div>
     );
};

export default NotFound;