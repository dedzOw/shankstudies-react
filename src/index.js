import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import Home from './pages/home/Home';
import Listings from './pages/listings/Listings';

const App = ()= > {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/listings" element={<Listings />} />
      </Route>
      </Routes>
    </HashRouter>
  )
};