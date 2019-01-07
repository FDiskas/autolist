// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

export const EmptyLayout = ({
  children,
  title,
  subtitle,
}: {
  title?: string,
  subtitle?: string,
}) => (
  <React.Fragment>
    <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">{title}</h3>
            <p className="subtitle has-text-grey">{subtitle}</p>
            <div className="box">
              <figure className="avatar">
                <img src={`https://placehold.it/128x128?text=${title}`} alt="" />
              </figure>
              <div>{children}</div>
            </div>
            <p className="has-text-grey">
              <Link to="/">Need Help?</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

EmptyLayout.defaultProps = {
  title: 'Error',
  subtitle: 'Sorry about that',
};
