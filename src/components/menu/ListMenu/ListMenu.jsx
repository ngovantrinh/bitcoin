import React from 'react';
import * as KEY from '../../../constant/constant';

const ListMenu = () => {
  const listItemMenu = KEY.TITLE_MENU;

  return (
    <ul className="list-menu">
      {listItemMenu.map((item, index) => (
        <li className="item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListMenu;
