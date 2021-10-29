import React from 'react';
import './Login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import loginPic from '../../../../banner/login-pic.png';
import googleIcon from '../../../../icons/googleIcon.png';
// import useFirebase from '../../../../hooks/useFirebase';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {

     const location = useLocation();
     const history = useHistory();
     const redirect_uri = location.state?.from || '/home'

     const {googleSignInUser, setUser} = useAuth();

     const handlegoogleLogin = () =>{
          googleSignInUser()
          .then(result =>{
               setUser(result.user);
               history.push(redirect_uri)
          })
     }

     return (
          <div className="login-warpper my-5">
          <div>
               
          </div>
              <div className="container my-5">
              
             <div className="row">
               <div className="col-lg-5 col-md-6 col-12 login-box">
                    
                    <h3 className="login-text">Please LogIn </h3>
                    <div className="google-area">
                         
                              <img width="30px" className="img-fluid img-icon" src={googleIcon} alt="" />
                         
                         
                              <button onClick={handlegoogleLogin} className="google-btn">Continue with google</button>
                         
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