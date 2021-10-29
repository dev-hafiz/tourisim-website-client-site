import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePlace.css';

const SinglePlace = ({place}) => {
     const {_id, img, title , des } = place || {} ;
     return (
          <div className="col-lg-6 col-md-12 col-12">
             <div id="container">	
	
                    <div className="product-details">
                         
                         <h1>{title}</h1>
                         <span className="hint-star star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star-o" aria-hidden="true"></i>
                         </span>
                         <p className="information">{des}</p>

                         
                         
               <div className="control">

               {/* dynamic button */}
                    
               <Link to={`/singlePlace/${_id}`}>
               <button className="btn">
                    <span className="booking">Booking</span>
               <span className="booking-cart"><i className="fas icon-booking fa-calendar-plus"></i></span>
               <span className="buy">Get now</span>
               </button>
               </Link>
                    
               </div>
                              
               </div>
	
               <div className="product-image">
               <img className="img-fluid" src={img} alt="" />
               <div className="info">
                    <h2> Tourist Place</h2>
                    <ul>
                         <li><strong>Choice your : </strong>Place</li>
                         <li><strong>Take: </strong>winter cloth</li>
                         <li><strong>Make sure: </strong>you are fit</li>
                         <li><strong>Start : </strong>your journey</li>
                         
                    </ul>
               </div>
               </div>

               </div>

          </div>
     );
};

export default SinglePlace;