import React from 'react';
import SiteHeader from '../../components/Shareds/SiteHeader';
import HomeBanner from '../../components/Partials/Home/Banner';
import HomeProfiles from '../../components/Partials/Home/Profiles';

const Home = function () {
  return (
    <div className="Home">
      <SiteHeader />
      <HomeBanner />
      <HomeProfiles />
    </div>
  );
};

export default Home;
