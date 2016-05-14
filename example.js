var RequestAPI = require('./rest-request.js');
var yahoo      = new RequestAPI('https://query.yahooapis.com/v1/public');

function getQuote(ticker) {
	var options = {};
	
	options.q        = 'select * from yahoo.finance.quotes where symbol =  "' + ticker + '"';
	options.format   = 'json';
	options.env      = 'store://datatables.org/alltableswithkeys';
	options.callback = '';
	
	var request = yahoo.get('yql', options);
	
	request.then(function(data) {
		var quotes = data.query.results.quote;
		
		if (typeof qoutes != 'Array')
			quotes = [quotes];
			
		console.log(ticker, '=', quotes[0].LastTradePriceOnly);		
		
	});

	request.catch(function(error) {
		console.log(error);
	});
	
}

getQuote('AAPL');