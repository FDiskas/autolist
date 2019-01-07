import * as React from 'react';

export function CopyrightComponent() {
  return (
    <div className="columns is-mobile is-centered">
      <div className="field is-grouped is-grouped-multiline">
        <div className="control">
          <div className="tags has-addons">
            <a className="tag is-link" href="https://github.com/dansup/bulma-templates">
              Bulma
            </a>
            <span className="tag is-info">MIT license</span>
          </div>
        </div>
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">based on a pen</span>
            <span className="tag has-addons is-warning">
              <a href="https://codepen.io/melanieseltzer/pen/odOXWM">
                <i className="fab fa-lg fa-codepen" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
