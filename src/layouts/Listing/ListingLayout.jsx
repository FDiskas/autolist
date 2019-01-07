// @flow

import * as React from 'react';
import { NavbarComponent } from '../../components/navbar/NavbarComponent';
import { SideBar } from '../../components/sidebar/SideBar';
import { CopyrightComponent } from '../../components/footer/CopyrightComponent';

export const ListingLayout = ({ children }: { children: React.Node }) => (
  <React.Fragment>
    <NavbarComponent />
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <SideBar />
          </div>
          <div className="column is-9">
            <div className="content is-medium">{children}</div>
          </div>
        </div>
      </div>
    </section>
    <CopyrightComponent />
  </React.Fragment>
);
