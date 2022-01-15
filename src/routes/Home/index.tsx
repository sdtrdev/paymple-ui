import React from 'react';
import SiteHeader from '../../components/partials/Header';
import HomeBanner from '../../components/partials/Home/Banner';
import ContentItem from '../../components/partials/Home/ContentItem';
import SiteFooter from '../../components/partials/Footer';

const Home = function () {
  return (
    <div className="Home">
      <SiteHeader />
      <HomeBanner />
      <ContentItem align="left" />
      <ContentItem align="right" />
      <ContentItem align="left" />
      <SiteFooter />
    </div>
  );
};

export default Home;
