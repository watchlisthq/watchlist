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

export function filterStreaming(result, service) {
  const filter = result.filter(show => show.streamingInfo.hasOwnProperty("us") && 
      show.streamingInfo.us.hasOwnProperty(service));
  return filter;
}