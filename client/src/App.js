import './App.scss';
import io from 'socket.io-client';
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadInitialData } from './store/actions';
import TickersList from './components/TickersList/TickersList';

const socket = io.connect('http://localhost:4000');

const App = () => {
  const dispatch = useDispatch();
  const tickers = useSelector(state => state.tickers);

  const fetchTickers = useCallback(() => {
    return dispatch(loadInitialData(socket));
  }, [dispatch]);

  useEffect(() => {
    socket.emit('start');
    fetchTickers();

    return () => {
      socket.disconnect();
    }
  }, [fetchTickers]);

  return (
    <div className="app">
      <TickersList tickers={tickers} />
    </div>
  );
};

export default App;
