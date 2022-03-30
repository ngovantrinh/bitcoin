import React from 'react';
import * as KEY from '../../../constant/constant';

function RowItem({ item, rate }) {
  const formater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: rate,
    minimumFractionDigits: 0,
  });

  const percent_1h = parseFloat(item[KEY.PERCENT_1H]).toFixed(1);
  const percent_24h = parseFloat(item[KEY.PERCENT_24H]).toFixed(1);
  const percent_7d = parseFloat(item[KEY.PERCENT_7D]).toFixed(1);

  return (
    <tr className="list-item">
      <td className="item star">{item[KEY.MARKET_CAP_RANK]}</td>
      <td className="item logo">
        <div className="item-img">
          <img src={item[KEY.IMAGE]} alt="image" /> <h3>{item[KEY.NAME]}</h3>
        </div>
        <div className="buy">
          <h5>{item[KEY.SYMBOL]}</h5>
          <a>Buy</a>
        </div>
      </td>
      <td className="item">{formater.format(item[KEY.PRICE])}</td>
      {item[KEY.PERCENT_1H] > 0 ? (
        <td className="item green">{percent_1h}%</td>
      ) : (
        <td className="item red">
          {isNaN(percent_1h) ? `--` : `${percent_1h}%`}
        </td>
      )}
      {item[KEY.PERCENT_24H] > 0 ? (
        <td className="item green">{percent_24h}%</td>
      ) : (
        <td className="item red">
          {isNaN(percent_7d) ? `--` : `${percent_24h}%`}
        </td>
      )}
      {item[KEY.PERCENT_7D] > 0 ? (
        <td className="item green">{percent_7d}%</td>
      ) : (
        <td className="item red">
          {isNaN(percent_7d) ? `--` : `${percent_7d}%`}
        </td>
      )}
      <td className="item">{formater.format(item[KEY.VOLUME])}</td>
      <td className="item">{formater.format(item[KEY.MKT_CAP])}</td>
    </tr>
  );
}

export default RowItem;
