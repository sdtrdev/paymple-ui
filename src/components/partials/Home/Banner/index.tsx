import React from 'react';
import { Button } from 'antd';
import './Banner.scss';

const Banner = function () {
  return (
    <section className="component is-banner">
      <div className="container">
        <div className="banner--columns">
          <div className="banner--columns__item is-content">
            <h2>BAŞLIK</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga delectus saepe mollitia
              quas tempore cum culpa vel commodi nulla repellat qui architecto in, ipsum
              voluptatibus officiis ipsa eaque nostrum aut.
            </p>
            <Button type="primary">Apply Now!</Button>
          </div>
          <div className="banner--columns__item is-banner">
            <img
              src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/hero/img-campaign-hero.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
