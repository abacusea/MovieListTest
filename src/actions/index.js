export const Api = `https://wookie.codesubmit.io/movies`;

export const getMovieById = {
    method: 'get',
    headers: { 
      'Authorization': 'Bearer Wookie2021'
    }
  };

  export const getMovies = {
    method: 'get',
    url: Api,
    headers: { 
      'Authorization': 'Bearer Wookie2021'
    }
  };