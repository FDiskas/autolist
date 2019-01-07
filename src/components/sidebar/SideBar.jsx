// @flow
import * as React from 'react';

export const SideBar = () => (
  <aside className="is-medium menu">
    <p className="menu-label">categories</p>
    <ul className="menu-list">
      <li className="is-right">
        <a href="/const" className="">
          <i className="fab fa-css3-alt" /> CSS
        </a>
      </li>
      <li>
        <a href="/let" className="">
          <i className="fab fa-js" /> JS
        </a>
      </li>
      <li>
        <a href="/let" className="">
          <i className="fab fa-html5" /> HTML
        </a>
      </li>
    </ul>
    <p className="menu-label">More to read...</p>
    <ul className="menu-list">
      <li>
        <span className="tag is-white is-medium">Lorem</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Ipsum</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Dolor</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Animi</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Eximi</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Nullius</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Oxipi</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Vultus</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Voluptatis</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Exomarphis</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Finimi</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Aenigma</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Arkham</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Blue</span>
      </li>
      <li>
        <span className="tag is-white is-medium">Medium</span>
      </li>
    </ul>
  </aside>
);
