import MovieCard from "../MovieCard/MovieCard";
import css from "./MoviesList.module.css";

export default function MoviesList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => {
        return (
          <li className={item} key={item.id + Date.now()}>
            <MovieCard item={item} />
          </li>
        );
      })}
    </ul>
  );
}
