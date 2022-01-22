import React from 'react';
import { Outlet } from 'react-router-dom';
import './Sign.scss';

const Sign = () => (
  <main className="route is-sign">
    <div className="sign--bg">
      <div className="sign--overlay">
        <div className="sign--wrapper">
          <div className="sign--content">
            <div className="sign--content__outlet">
              <div className="container-fluid sign--container">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Sign;
