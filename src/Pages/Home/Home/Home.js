import React from 'react';
import SearchPlace from '../SearchPlace/SearchPlace';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css';

const Home = () => {
     return (
          <div>
              <TopBanner/>
              <SearchPlace/> 
          </div>
     );
};

export default Home;