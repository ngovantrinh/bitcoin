import React from 'react';
import * as KEY from '../../../constant/constant';

function RowTitle() {
  const listTitle = KEY.TITLE_TABLE;
  return (
    <thead className="list-item title">
      {listTitle.map((item, index) => (
        <th key={index}>{item}</th>
      ))}
    </thead>
  );
}

export default RowTitle;
