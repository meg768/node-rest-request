# node-rest-request
A small node module for making REST requests.

# Installation
	npm install rest-request

# Usage
	var Request = require('rest-request');
	var restAPI = new Request('http://server.com');
	...	
	var request = restAPI.get('customer/:id', {id:1001});
	
	request.then(function(customer) {
		...
	});


# Example
	var Request = require('rest-request');
	var YahooAPI = new Request('https://query.yahooapis.com/v1/public');
	
	function getQuote(ticker) {
		var options = {};
		
		options.q        = 'select * from yahoo.finance.quotes where symbol =  "' + ticker + '"';
		options.format   = 'json';
		options.env      = 'store://datatables.org/alltableswithkeys';
		options.callback = '';
		
		var request = YahooAPI.get('yql', options);
		
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