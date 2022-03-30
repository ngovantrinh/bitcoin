import React from 'react';
import logo from '../../assets/img/coingecko-logo-63f24b60e1d2d526c141fee733ad2a39fbce7dabedd187a0dba95220396ce9a0.webp';
import ListMenu from './ListMenu/ListMenu';

function Menu() {
  return (
    <div className="header-menu">
      <div className="container">
        <div className="menu">
          <img src={logo} alt="logo" />
          <ListMenu />
          <div>
            <input type="text" placeholder="search" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
