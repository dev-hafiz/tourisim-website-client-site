import React from 'react';
import './TopBanner.css';
import topBanner from '../../../banner/banner1.jpg';

const TopBanner = () => {
     return (
          <div style={{ backgroundImage: `url(${topBanner})`, height:"100vh", backgroundPosition: "center center"}}>
               <div className="container">
               <div>
                    <h1 className="top-heading">Are You ready to Flying with us ?</h1>
                    <p className="heading-para-text">Alternative Ski tourist worth sloping off to! Welcome  to connect with us</p>
               </div>
               </div>
          </div>
     );
};

export default TopBanner;