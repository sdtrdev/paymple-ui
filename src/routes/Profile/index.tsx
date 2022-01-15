import React from 'react';
import Banner from '../../components/partials/Profile/Banner';
import SiteFooter from '../../components/partials/Footer';
import ProfileDetail from '../../components/partials/Profile/Profile';
import Embeds from '../../components/partials/Profile/Embeds';

const Profile = function () {
  return (
    <div className="Profile">
      <Banner />
      <ProfileDetail />
      <Embeds />
      <SiteFooter />
    </div>
  );
};

export default Profile;
