import { Link, useLocation } from "react-router-dom";
import css from "./MovieCard.module.css";

export default function MovieCard({ item }) {
  const location = useLocation();
  return (
    <Link
      className={css.link}
      to={`/movies/${item.id}`}
      state={{ from: location }}
    >
      <img
        className={css.img}
        src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
        alt={item.original_title}
      />
      <div className={css.box}>
        <p className={css.title}>{item.title}</p>
      </div>
    </Link>
  );
}
