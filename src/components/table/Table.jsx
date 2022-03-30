import React, { useState } from 'react';
import Selector from './Selector/Selector';
import RowItem from './RowItem/RowItem';
import RowTitle from './RowTitle/RowTitle';

function Table({ allCoin }) {
  const [rateOptionChose, setRateOptionChose] = useState('usd');
  const rateOption = (rate) => {
    setRateOptionChose(rate);
  };
  return (
    <div className="list-coin">
      <h1>Top Coins by Market Capitalization</h1>
      <Selector handleRate={rateOption} />
      {allCoin ? (
        <table>
          <RowTitle />
          {allCoin.map((item, index) => (
            <RowItem item={item} key={index} rate={rateOptionChose} />
          ))}
        </table>
      ) : (
        <p>error</p>
      )}
    </div>
  );
}

export default Table;
