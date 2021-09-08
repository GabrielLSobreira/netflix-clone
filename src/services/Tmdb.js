const API_KEY = '6b74722dde66c42c6dc3c8c621e04cd7';
const API_BASE = 'https://api.themoviedb.org/3';

const moviesFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await moviesFetch(
          `/discover/tv?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&page=1&with_networks=213&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`,
        ),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await moviesFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await moviesFetch(
          `/movie/popular?api_key=${API_KEY}&language=pt-BR&page=2`,
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await moviesFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await moviesFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await moviesFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await moviesFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await moviesFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case 'movie':
          info = await moviesFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`,
          );
          break;
        case 'tv':
          info = await moviesFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`,
          );
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
