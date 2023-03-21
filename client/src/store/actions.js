export const fetchTickers  = (tickers) => {
  return {
   type: "FETCH_TICKERS",
	  payload: tickers 
  };
};

export const loadInitialData = (socket) => {
	return (dispatch) => {
		socket.on('ticker', (quotes) => {
		   dispatch(fetchTickers(quotes));
	  });
	};	
};
