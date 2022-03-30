import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import './assets/css/main.css';
import Menu from './components/menu/Menu';
import Table from './components/table/Table';
import { getCoint } from './features/coin/coinSlice';

function App() {
  const dispatch = useDispatch();
  const allCoin = useSelector((state) => state.coin.current);
  useEffect(() => {
    const fetchCoin = () => {
      try {
        return dispatch(getCoint('usd'));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoin();
  }, [getCoint]);

  return (
    <div className="App">
      <Menu />
      <Table allCoin={allCoin} />
    </div>
  );
}

export default App;
