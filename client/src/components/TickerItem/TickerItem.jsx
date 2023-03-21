import React, { useCallback } from 'react';
import moment from 'moment';
import './TickerItem.scss';

export const TickerItem = ({ ticker }) => {
  const handleDate = useCallback((date) => {
    return moment(date).format('DD/MM/YYYY[ ]HH:mm');
  }, []);

  return (
    <>
      <li className="ticker">
        <div className='ticker__info'>
          <div className='ticker__info-name'>{ticker.ticker}</div>
          <div className='ticker__info-exchange'>{ticker.exchange}</div>
        </div>
        <div className='ticker__price'>{ticker.price}{' $'}</div>
        <div className='ticker__price'>{ticker.change}{' $'}</div>
        <div className='ticker__percent'>{ticker.change_percent}{' %'}</div>
      </li>
      <div className='ticker__date' data-testid="date">{handleDate(ticker.last_trade_time)}</div>
    </>
  );
};

export default TickerItem;
