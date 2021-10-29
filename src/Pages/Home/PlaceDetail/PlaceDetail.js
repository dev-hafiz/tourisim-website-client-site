import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './PlaceDetail.css';


const PlaceDetail = () => {
     const {detailId} = useParams();
     //loaddata with id
     const [place, setPlace] = useState({})
     useEffect( ()=>{
          fetch(`http://localhost:5000/places/${detailId}`)
          .then(res => res.json())
          .then(data => setPlace(data))
     },[])

     return (
          <div>
          <p className="text-center">{place?.title}</p>
               <h1 className="text-center">Place detail {detailId}</h1>
          </div>
     );
};

export default PlaceDetail;