import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './SiteHeader.scss';

const Header = function () {
  return (
    <header className="component is-header">
      <div className="container header--container">
        <div className="header--columns">
          <div className="header--columns__item is-logo">
            <Link to="/">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365 51">
                <path
                  d="M24.368.6c4.656 0 8.712.768 12.168 2.304 3.456 1.536 6.12 3.744 7.992 6.624 1.872 2.88 2.808 6.24 2.808 10.08s-.936 7.2-2.808 10.08c-1.872 2.88-4.536 5.088-7.992 6.624-3.456 1.536-7.512 2.304-12.168 2.304h-7.272V51H.104V.6h24.264Zm-1.08 24.912c2.304 0 4.032-.504 5.184-1.512 1.152-1.056 1.728-2.52 1.728-4.392 0-1.872-.576-3.312-1.728-4.32-1.152-1.056-2.88-1.584-5.184-1.584h-6.192v11.808h6.192ZM84.722 42.216H65.569L62.185 51h-17.28L66.937.6h16.704L105.673 51H88.105l-3.383-8.784Zm-4.68-12.24-4.897-12.672-4.896 12.672h9.792ZM135.103 32.712V51h-16.992V32.496L99.103.6h17.928l10.296 17.424L137.695.6h16.416l-19.008 32.112ZM201.268 51l-.144-22.968-10.944 18.432h-7.488l-10.944-17.64V51h-15.48V.6h13.968l16.416 26.856L202.636.6h13.968l.144 50.4h-15.48ZM249.227.6c4.656 0 8.712.768 12.168 2.304 3.456 1.536 6.12 3.744 7.992 6.624 1.872 2.88 2.808 6.24 2.808 10.08s-.936 7.2-2.808 10.08c-1.872 2.88-4.536 5.088-7.992 6.624-3.456 1.536-7.512 2.304-12.168 2.304h-7.272V51h-16.992V.6h24.264Zm-1.08 24.912c2.304 0 4.032-.504 5.184-1.512 1.152-1.056 1.728-2.52 1.728-4.392 0-1.872-.576-3.312-1.728-4.32-1.152-1.056-2.88-1.584-5.184-1.584h-6.192v11.808h6.192ZM277.768.6h16.992v37.224h22.752V51h-39.744V.6ZM364.11 38.184V51h-41.904V.6h40.968v12.816H338.91v5.904h21.312v12.24H338.91v6.624h25.2Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>

          <div className="header--columns__item is-actions">
            <Link to="/">
              <Button type="primary" shape="round" size="large">
                Sign In
              </Button>
            </Link>
            <Link to="/">
              <Button type="primary" shape="round" size="large">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;