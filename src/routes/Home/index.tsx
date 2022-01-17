import React from 'react';
import SiteHeader from '../../components/Shareds/SiteHeader';
import HomeBanner from '../../components/Partials/Home/Banner';

const Home = function () {
  return (
    <div className="Home">
      <SiteHeader />
      <HomeBanner />
    </div>
  );
};

export default Home;
