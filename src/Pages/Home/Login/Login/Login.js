import React from 'react';
import './Login.css';
import loginPic from '../../../../banner/login-pic.png';
import googleIcon from '../../../../icons/googleIcon.png';
// import useFirebase from '../../../../hooks/useFirebase';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {

     const {googleSignInUser, user} = useAuth();

     return (
          <div className="login-warpper">
          <div>
               
          </div>
              <div className="container">
              
             <div className="row">
               <div className="col-lg-5 col-md-6 col-12 login-box">
                    
                    <h3 className="login-text">Please Sign In </h3>
                    <div className="google-area">
                         
                              <img width="30px" className="img-fluid img-icon" src={googleIcon} alt="" />
                         
                         
                              <button onClick={googleSignInUser} className="google-btn">Continue with google</button>
                         
                    </div>
               </div>
               <div className="col-lg-7 col-md-6 col-12">
                    <img className="img-fluid" src={loginPic} alt="" />
               </div>
             </div>

              </div>

          </div>
     );
};

export default Login;