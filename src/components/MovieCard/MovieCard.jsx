import { Link } from "react-router-dom";
import css from "./MovieCard.module.css";

export default function MovieCard({ item }) {
  return (
    <Link to={`/movies/${item.id}`}>
      <img
        className={css.img}
        src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
        alt={item.original_title}
      />
      <p>{item.title}</p>
    </Link>
  );
}
