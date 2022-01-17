import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

import Home from './Home';

const About = lazy(() => import('./About'));

const Router: FunctionComponent = function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="about"
        element={
          <Suspense fallback={<Spin />}>
            <About />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
