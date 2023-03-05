import axios from 'axios';

export function searchTitle(title) {
  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/v2/search/title',
    params: {title: title, country: 'us', output_language: 'en'},
    headers: {
      'X-RapidAPI-Key': 'f1da698a20mshfdaf67f61741fe5p12600ajsn29fb5424de6b',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  return axios.request(options).then(function (response) {
    return response.data.result;
  }).catch(function (error) {
    console.error(error);
  });
}

export function searchGenre(genre) {
  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/v2/search/title',
    params: {
      country: 'us',
      services: 'netflix,prime.buy,hulu.addon.hbo,peacock.free',
      output_language: 'en',
      show_type: 'movie',
      genre: genre,
      show_original_language: 'en',
    },
    headers: {
      'X-RapidAPI-Key': 'f1da698a20mshfdaf67f61741fe5p12600ajsn29fb5424de6b',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  return axios.request(options).then(function (response) {
    return response.data.result;
  }).catch(function (error) {
    console.error(error);
  });
}

export function filterStreaming(result, service) {
  const filter = result.filter(show => show.streamingInfo.hasOwnProperty("us") && 
      show.streamingInfo.us.hasOwnProperty(service));
  return filter;
}

/**
 * 1:"Biography"
2:"Film Noir"
3:"Game Show"
4:"Musical"
5:"Sport"
6:"Short"
7:"Adult"
12:"Adventure"
14:"Fantasy"
16:"Animation"
18:"Drama"
27:"Horror"
28:"Action"
35:"Comedy"
36:"History"
37:"Western"
53:"Thriller"
80:"Crime"
99:"Documentary"
878:"Science Fiction"
9648:"Mystery"
10402:"Music"
 */