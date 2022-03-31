import React from 'react';
import * as KEY from '../../../constant/constant';

const Selector = ({ handleRate }) => {
  const option = KEY.SELECT_OPTION;

  const exchangeRate = (item) => {
    // dispatch(getCoint(item));
    handleRate(item);
  };

  return (
    <select
      className="drop-select"
      onChange={(e) => {
        e.persist();
        exchangeRate(e.target.value);
      }}
    >
      {option.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Selector;
