import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './Banner.scss';

const HomeBanner = function () {
  return (
    <section className="component is-home-banner">
      <div className="home-banner--bg" style={{ backgroundImage: `url(/home--banner.jpg)` }}>
        <div className="home-banner--overlay">
          <div className="container home-banner--container">
            <div className="home-banner--content">
              <h1>WE ARE AWESOME</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sapiente illo
                assumenda corporis temporibus odit laborum dicta placeat perferendis nesciunt!
                Neque, nemo harum. Esse magni perspiciatis sunt. Odio, quas vitae.
              </p>
              <Link to="/sign/up">
                <Button type="primary" shape="round" size="large">
                  Apply Now!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
