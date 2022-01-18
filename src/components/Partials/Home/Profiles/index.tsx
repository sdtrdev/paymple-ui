import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Link } from 'react-router-dom';
import './Profile.scss';

const HomeProfiles = function () {
  return (
    <section className="component is-home-profiles">
      <div className="container home-profiles--container">
        <div className="home-profiles--columns">
          <div className="home-profiles--columns__item">
            <Link to="/">
              <Card hoverable cover={<img alt="example" src="/home--avatar.png" />}>
                <Meta title="Jamily Doe" description="open source software engineer" />
              </Card>
            </Link>
          </div>
          <div className="home-profiles--columns__item">
            <Link to="/">
              <Card hoverable cover={<img alt="example" src="/home--avatar.png" />}>
                <Meta title="Jamily Doe" description="open source software engineer" />
              </Card>
            </Link>
          </div>
          <div className="home-profiles--columns__item">
            <Link to="/">
              <Card hoverable cover={<img alt="example" src="/home--avatar.png" />}>
                <Meta title="Jamily Doe" description="open source software engineer" />
              </Card>
            </Link>
          </div>
          <div className="home-profiles--columns__item">
            <Link to="/">
              <Card hoverable cover={<img alt="example" src="/home--avatar.png" />}>
                <Meta title="Jamily Doe" description="open source software engineer" />
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProfiles;
