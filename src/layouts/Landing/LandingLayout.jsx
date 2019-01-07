// @flow

import * as React from 'react';
import { NavbarComponent } from '../../components/navbar/NavbarComponent';
import { FooterComponent } from '../../components/footer/FooterComponent';

export const LandingLayout = ({ children }: { children: React.Node }) => (
  <React.Fragment>
    <NavbarComponent />
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="content is-medium">{children}</div>
          </div>
        </div>
      </div>
    </section>
    <FooterComponent />
  </React.Fragment>
);
