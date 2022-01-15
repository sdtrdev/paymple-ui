import React from 'react';
import { Button } from 'antd';
import './Header.scss';

const Header = function () {
  return (
    <header className="component is-header">
      <div className="container">
        <div className="header--columns">
          <div className="header--columns__item is-logo">
            <span className="logo">LO GO</span>
          </div>
          <div className="header--columns__item is-actions">
            <Button type="primary">Sign In</Button>
            <Button type="primary">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
