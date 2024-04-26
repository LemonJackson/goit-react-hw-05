import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

import { fetchMovie } from "../unsplash-api";

import MovieInfo from "../components/MovieInfo/MovieInfo";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        const data = await fetchMovie(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <div>
      <p>
        <b>Movie Details</b>
      </p>
      {movie && <MovieInfo movie={movie} />}

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
