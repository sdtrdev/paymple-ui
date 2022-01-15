import React from 'react';
import { Select } from 'antd';
import './Profile.scss';

const { Option } = Select;

const Profile = function () {
  return (
    <section className="component is-profile">
      <div className="profile--wrapper">
        <div className="profile--avatar">
          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg"
            alt=""
          />
        </div>
        <div className="profile--columns__item is-profile">
          <h2>Erdoğan Tonguç BULUT</h2>
          <h3>Software Engineer / Interested trading algos</h3>
          <Select defaultValue="USDT" style={{ width: 120 }}>
            <Option value="usdt">USDT</Option>
            <Option value="busd">BUSD</Option>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default Profile;
