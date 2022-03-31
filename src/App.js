import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import './assets/css/main.css';
import 'antd/dist/antd.css';
import Menu from './components/menu/Menu';
import Table from './components/table/Table';
import { getCoint } from './features/coin/coinSlice';

const DEFAULT_PAGE_SIZE = 15;
const DEFAULT_CURRENT_PAGE = 1;

function App() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE);
  const [params, setParams] = useState({
    order: 'market_cap_desc',
    vs_currency: 'usd',
    per_page: DEFAULT_PAGE_SIZE,
    sparkline: false,
    price_change_percentage: '1h%2C24h%2C7d',
  });

  const allCoin = useSelector((state) => state.coin.current);

  useEffect(() => {
    const fetchCoin = () => {
      return dispatch(getCoint({ ...params, page: currentPage }));
    };
    fetchCoin();
  }, [params, currentPage]);

  return (
    <div className="App">
      <Menu />
      <Table
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        allCoin={allCoin}
        params={params}
        setParams={setParams}
      />
    </div>
  );
}

export default App;
