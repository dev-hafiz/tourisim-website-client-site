import React from 'react';
import SearchPlace from '../SearchPlace/SearchPlace';
import TopBanner from '../TopBanner/TopBanner';
import TopPlaces from '../TopPlaces/TopPlaces';
import './Home.css';

const Home = () => {
     return (
          <div>
              <TopBanner/>
              <SearchPlace/> 
              <TopPlaces/>
          </div>
     );
};

export default Home;