import { render, screen } from '@testing-library/react';
import moment from 'moment';
import TickerItem from './TickerItem';

describe('TickerItem Component', () => {
  const mockTickerItem = {
    "ticker": "AAPL",
    "exchange": "NASDAQ",
    "price": 279.29,
    "change": 64.52,
    "change_percent": 0.84,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
  };
  
  it('renders passed data', () => {
    render(<TickerItem ticker={mockTickerItem} />);
    expect(screen.getByText('AAPL')).toBeTruthy();
    expect(screen.getByText('NASDAQ')).toBeTruthy();
    expect(screen.getByText('279.29 $')).toBeTruthy();
    expect(screen.getByText('64.52 $')).toBeTruthy();
    expect(screen.getByText('0.84 %')).toBeTruthy();
  });
  
  it('handles ticker date', () => {
    render(<TickerItem ticker={mockTickerItem} />);
    const element = screen.getByTestId('date');
    const expectedValue = moment(mockTickerItem.last_trade_time).format('DD/MM/YYYY[ ]HH:mm');
    expect(element).toHaveTextContent(expectedValue);
  });
});
