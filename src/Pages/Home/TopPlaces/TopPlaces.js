import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SinglePlace from "../SinglePlace/SinglePlace";
import "./TopPlaces.css";

const TopPlaces = () => {
  //Load data on state
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("https://tourisim-website-server-site.onrender.com/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div>
      {places.length === 0 ? (
        <Spinner animation="border" />
      ) : (
        <div className="container">
          <h2 className="tourist-title">World Tourist Places </h2>

          <div className="row">
            {places.map((place) => (
              <SinglePlace place={place} key={place._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopPlaces;
