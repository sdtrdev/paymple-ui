import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

import Home from './Home';

const About = lazy(() => import('./About'));
const Profile = lazy(() => import('./Profile'));
const ProfileEdit = lazy(() => import('./Profile/Edit'));

const Router: FunctionComponent = function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="profile"
        element={
          <Suspense fallback={<Spin />}>
            <Profile />
          </Suspense>
        }
      />
      <Route
        path="profile/edit"
        element={
          <Suspense fallback={<Spin />}>
            <ProfileEdit />
          </Suspense>
        }
      />
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
