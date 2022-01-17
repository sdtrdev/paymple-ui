import React, { FC } from 'react';
import './Content.scss';

type Props = {
  mode: 'dark' | 'light';
  align: 'left' | 'right';
  bannerUrl: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

const Content: FC<Props> = function ({ mode, align, bannerUrl, title, content }) {
  return (
    <section className={`component is-home-content is-${mode}`}>
      <div className={`home-content--columns is-${align}`}>
        <div className="home-content--columns__item is-content">
          {title}
          {content}
        </div>
        <div className="home-content--columns__item is-banner">
          {align === 'left' && <span className="banner-triangle is-left" />}
          <img src={bannerUrl} alt="" />
          {align === 'right' && <span className="banner-triangle is-right" />}
        </div>
      </div>
    </section>
  );
};

export default Content;
