import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

import Home from './Home';

const About = lazy(() => import('./About'));
const Documentation = lazy(() => import('./Documentation'));
const DocumentationStart = lazy(() => import('./Documentation/Start'));
const DocumentationPrivacyPolicy = lazy(() => import('./Documentation/PrivacyPolicy'));
const DocumentationTermsOfUse = lazy(() => import('./Documentation/TermsOfUse'));
const DocumentationCookiePolicy = lazy(() => import('./Documentation/CookiePolicy'));
const Sign = lazy(() => import('./Sign'));
const SignIn = lazy(() => import('./Sign/In'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="documentation"
      element={
        <Suspense fallback={<Spin />}>
          <Documentation />
        </Suspense>
      }
    >
      <Route
        path=""
        element={
          <Suspense fallback={<Spin />}>
            <DocumentationStart />
          </Suspense>
        }
      />
      <Route
        path="privacy-policy"
        element={
          <Suspense fallback={<Spin />}>
            <DocumentationPrivacyPolicy />
          </Suspense>
        }
      />
      <Route
        path="terms-of-use"
        element={
          <Suspense fallback={<Spin />}>
            <DocumentationTermsOfUse />
          </Suspense>
        }
      />
      <Route
        path="cookie-policy"
        element={
          <Suspense fallback={<Spin />}>
            <DocumentationCookiePolicy />
          </Suspense>
        }
      />
    </Route>
    <Route
      path="sign"
      element={
        <Suspense fallback={<Spin />}>
          <Sign />
        </Suspense>
      }
    >
      <Route
        path="in"
        element={
          <Suspense fallback={<Spin />}>
            <SignIn />
          </Suspense>
        }
      />
      {/* <Route
        path="out"
        element={
          <Suspense fallback={<Spin />}>
            <DocumentationTermsOfUse />
          </Suspense>
        }
      /> */}
    </Route>
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

export default Router;
