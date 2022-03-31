import React, { useCallback, useMemo } from 'react';
import Selector from './Selector/Selector';
import RowItem from './RowItem/RowItem';
import RowTitle from './RowTitle/RowTitle';
import { Pagination, Spin } from 'antd';
import { useSelector } from 'react-redux';

const DEFAULT_PAGE_SIZE = 15;
function Table({ allCoin, params, setParams, currentPage, setCurrentPage }) {
  const loading = useSelector((state) => state.coin.loading);

  const rateOption = (rate) => {
    setParams({ ...params, vs_currency: rate });
  };
  const handleChangePage = useCallback(
    (current) => {
      setCurrentPage(current);
    },
    [setCurrentPage]
  );

  const content = useMemo(() => {
    if (loading || !allCoin) {
      return (
        <div className="loading">
          <Spin size="large" />
        </div>
      );
    } else if (allCoin) {
      return (
        <>
          <table>
            <RowTitle />
            {allCoin.map((item, index) => (
              <RowItem item={item} key={index} rate={params.vs_currency} />
            ))}
          </table>
          <Pagination
            showSizeChanger={false}
            onChange={handleChangePage}
            defaultCurrent={currentPage}
            pageSize={DEFAULT_PAGE_SIZE}
            total={200}
          />
        </>
      );
    }
  }, [loading, allCoin, handleChangePage, currentPage]);

  return (
    <div className="list-coin">
      <h1>Top Coins by Market Capitalization</h1>
      <Selector handleRate={rateOption} />
      <br />
      {content}
    </div>
  );
}

export default Table;
