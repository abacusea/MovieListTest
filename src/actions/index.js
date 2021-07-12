export const Api = `https://wookie.codesubmit.io/movies`;
const authToken = 'Bearer Wookie2021';

export const getMovieById = {
    method: 'get',
    headers: { 
      'Authorization': authToken
    }
  };

  export const getMovies = {
    method: 'get',
    url: Api,
    headers: { 
      'Authorization': authToken
    }
  };