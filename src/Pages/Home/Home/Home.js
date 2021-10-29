import React from 'react';
import ArrangementTravel from '../ArrangementTravel/ArrangementTravel';
import SearchPlace from '../SearchPlace/SearchPlace';
import TopBanner from '../TopBanner/TopBanner';
import TopPlaces from '../TopPlaces/TopPlaces';
import TourGuiders from '../TourGuider/TourGuiders';
import TouristOffice from '../TouristOffice/TouristOffice';
import './Home.css';

const Home = () => {
     return (
          <div>
              <TopBanner/>
              <SearchPlace/> 
              <TopPlaces/>
              <TouristOffice/>
              <ArrangementTravel/>
              <TourGuiders/>
          </div>
     );
};

export default Home;