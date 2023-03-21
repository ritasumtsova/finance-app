import React from 'react';
import TickerItem from '../TickerItem/TickerItem';
import './TickersList.scss';

const TickersList = ({ tickers }) => {
  return (
    <ul className="tickers-list">
      {tickers && tickers.map((ticker, i) => (
        <TickerItem ticker={ticker} key={ticker.ticker + i}/>
      ))}
    </ul>
  );
};

export default TickersList;
