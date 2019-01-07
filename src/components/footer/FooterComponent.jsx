// @flow

import * as React from 'react';
import { CopyrightComponent } from './CopyrightComponent';

export const FooterComponent = () => (
  <footer className="footer">
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <article className="notification media has-background-white">
              <figure className="media-left">
                <span className="icon">
                  <i className="has-text-warning fas fa-columns fa-lg" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Columns</h1>
                  <p className="is-size-5 subtitle">
                    The power of <strong>Flexbox</strong> in a simple interface
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="notification has-background-white media">
              <figure className="media-left">
                <span className="icon has-text-info">
                  <i className="fab fa-lg fa-wpforms" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Form</h1>
                  <p className="is-size-5 subtitle">
                    The indispensable <strong>form controls</strong>, designed for maximum clarity
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="notification has-background-white media">
              <figure className="media-left">
                <span className="icon has-text-danger">
                  <i className="fas fa-lg fa-cubes" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Components</h1>
                  <p className="is-size-5 subtitle">
                    Advanced multi-part components with lots of possibilities
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="notification has-background-white media">
              <figure className="media-left">
                <span className="icon has-text-grey">
                  <i className="fas fa-lg fa-cogs" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Modifiers</h1>
                  <p className="is-size-5 subtitle">
                    An <strong>easy-to-read</strong> naming system designed for humans
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="notification has-background-white media">
              <figure className="media-left">
                <span className="icon has-text-primary">
                  <i className="fas fa-lg fa-warehouse" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Layout</h1>
                  <p className="is-size-5 subtitle">
                    Design the <strong>structure</strong> of your webpage with these CSS classes
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="notification has-background-white media">
              <figure className="media-left">
                <span className="icon has-text-danger">
                  <i className="fas fa-lg fa-cube" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Elements</h1>
                  <p className="is-size-5 subtitle">
                    Essential interface elements that only require a{' '}
                    <strong>single CSS class</strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <CopyrightComponent />
  </footer>
);
