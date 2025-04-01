import axios from "axios";

export function searchTitle(title) {
  const options = {
    method: "GET",
    url: "https://streaming-availability.p.rapidapi.com/shows/search/title",
    params: { title: title, country: "us", output_language: "en" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };
  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export function searchGenre(genre, show_type) {
  const options = {
    method: "GET",
    url: "https://streaming-availability.p.rapidapi.com/shows/search/filters",
    params: {
      genres: genre,
      show_type: show_type,
      order_direction: "desc",
      order_by: "rating",
      country: "us",
      catalogs: "netflix,prime.buy,hulu.addon.hbo,peacock.free",
      output_language: "en",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };
  return axios
    .request(options)
    .then(function (response) {
      return response.data.shows;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export function readRecs(result) {
  // Flatten array of genres
  let genres = result.map((show) => show.genres);
  genres = genres.flat();

  // Reduce
  genres = genres.reduce((acc, cur) => {
    acc[cur.id] = (acc[cur.id] || 0) + 1;
    return acc;
  }, {});

  // Sorting
  genres = Object.keys(genres).map((key) => ({
    times: genres[key],
    genre: key,
  }));
  genres = genres.sort((a, b) => b.times - a.times).map((show) => show.genre);
  return genres;
}

export function filterStreaming(result, service) {
  const filter = result.filter(
    (show) =>
      show.streamingInfo.hasOwnProperty("us") &&
      show.streamingInfo.us.hasOwnProperty(service)
  );
  return filter;
}
