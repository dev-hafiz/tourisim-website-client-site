import React from 'react';
import ArrangementTravel from '../ArrangementTravel/ArrangementTravel';
import CeoAbout from '../CeoAbout/CeoAbout';
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
              <CeoAbout/>
              <ArrangementTravel/>
              <TourGuiders/>
          </div>
     );
};

export default Home;