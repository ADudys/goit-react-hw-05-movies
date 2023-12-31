import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, MoviesList } from '../components/Layout.styles';
import { trendingmoviesRequest } from '../service/apiService';

const Home = () => {
  const [moviesTrand, setMoviesTrend] = useState([]);

  useEffect(() => {
    (async function trendingMovies() {
      const res = await trendingmoviesRequest();
      const movies = res.data.results;
      if (movies) {
        setMoviesTrend(movies);
      }
    })();
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      <MoviesList>
        {moviesTrand.map(({ id, name, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} key={id}>
              {title} {name}
            </Link>
          </li>
        ))}
      </MoviesList>
    </Container>
  );
};

export default Home;
