import React from 'react';
import './ContactHeader.css';
import email from '../../../icons/email-icon.png';
import phone from '../../../icons/phone-icon.png';


const ContactHeader = () => {
     
     return (
          <div className=" top-contact">
               <div className="container">
                    <div className="row">
                         <div className="col-lg-3 col-md-4 col-12 text-center">
                              <div className="email-contact">
                              <div>
                              <img src={email} alt="" />
                              </div>
                              <div>
                              <span className="ms-3">contact@agency.email</span>
                              </div>
                              </div>
                         </div>
                         <div className="col-lg-6 col-md-4 text-center col-12 border-start border-end">
                         <div className="email-contact">
                              <div>
                              <img className="ms-5 " src={phone} alt="" />
                              </div>
                              <div>
                              <span className="ms-3"> +1 (009) 99 143 77</span>
                              </div>
                              </div>
                         </div>
                         <div className="col-lg-3 col-md-4 col-12 text-center">
                              <div className="icon_wrapper">
                              <i className="fab fa-linkedin i-coustom"></i>
                              <i className="fab fa-facebook-square i-coustom"></i>
                              <i className="fab fa-twitter-square i-coustom"></i>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ContactHeader;