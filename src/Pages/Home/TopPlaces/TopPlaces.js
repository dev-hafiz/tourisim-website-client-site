import React, { useEffect, useState } from 'react';
import SinglePlace from '../SinglePlace/SinglePlace';
import './TopPlaces.css';

const TopPlaces = () => {
     //Load data on state
     const [places, setPlaces] = useState([])
     useEffect( ()=>{
          fetch('http://localhost:5000/places')
          .then( res => res.json())
          .then(data => setPlaces(data))
     },[])
     return (
          <div>
               <div className="container">
                 <h2 className="tourist-title">World Tourist Places </h2>
                 
                 <div className="row">
                      {
                         places.map(place => <SinglePlace
                         place={place}
                          key={place._id}/>)
                      }
                 </div>
               </div>
          </div>
     );
};

export default TopPlaces;