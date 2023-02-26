const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/v2/search/basic',
  params: {
    country: 'us',
    services: 'netflix,prime.buy,hulu.addon.hbo,peacock.free',
    output_language: 'en',
    show_type: 'movie',
    genre: '18',
    show_original_language: 'en',
    keyword: 'zombie'
  },
  headers: {
    'X-RapidAPI-Key': 'f1da698a20mshfdaf67f61741fe5p12600ajsn29fb5424de6b',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};
const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://streaming-availability.p.rapidapi.com/v2/search/title',
//   params: {title: 'you', country: 'us', type: 'series', output_language: 'en'},
//   headers: {
//     'X-RapidAPI-Key': 'f1da698a20mshfdaf67f61741fe5p12600ajsn29fb5424de6b',
//     'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
//   }
// };

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});