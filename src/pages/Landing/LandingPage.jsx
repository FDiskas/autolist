// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

export function LandingPage({ children }: Props) {
  return (
    <React.Fragment>
      <div className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <p className="title">Landing page</p>
            <p className="subtitle">Light bold subtitle</p>
          </div>
        </div>
      </div>
      <p className="has-text-grey">
        <Link to="../">Need Help?</Link>
        <Link to="/list">Go to Listing Page</Link>
        <Link to="/error">Go to Error Page</Link>
      </p>
      <p>{children}</p>
    </React.Fragment>
  );
}
