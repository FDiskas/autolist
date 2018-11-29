// @flow

import * as React from 'react';

import './App.scss';

// import { Navbar } from './components/navbar/';
// import Article from './components/Article';
// import Footer from './components/Footer';
import { NavbarComponent } from './components/navbar/NavbarComponent';
import { FooterComponent } from './components/footer/FooterComponent';

export const App = () => (
  <div>
    <NavbarComponent />
    <div className="container">Labas</div>
    <FooterComponent />
  </div>
);
