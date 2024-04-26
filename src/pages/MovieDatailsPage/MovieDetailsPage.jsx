import { useEffect, useState, Suspense, useRef } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";

import { fetchMovie } from "../../movies-api";

import MovieInfo from "../../components/MovieInfo/MovieInfo";

import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkURLRef = useRef(location.state?.from ?? "/");

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
    <div className={css.page}>
      <div>
        <Link className={css.link} to={backLinkURLRef.current}>
          Go back
        </Link>
      </div>
      {movie && <MovieInfo movie={movie} />}

      <ul className={css.list}>
        <li>
          <Link className={css.link} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={css.link} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<b>Loading nested route...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
