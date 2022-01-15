import React from 'react';
import { Button } from 'antd';
import './Footer.scss';

const Footer = function () {
  return (
    <footer className="component is-footer">
      <div className="container">
        <div className="footer--columns">
          <div className="footer--columns__item is-logo">
            <span className="logo">LO GO</span>
          </div>
          <div className="footer--columns__item is-actions">
            <Button type="link">Sign In</Button>
            <Button type="link">Sign Up</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
