import css from "./MovieInfo.module.css";
export default function MovieInfo({ movie }) {
  return (
    <div className={css.info}>
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div className={css.textInfo}>
        <h2 className={css.title}>{movie.title}</h2>
        <ul className={css.infoList}>
          <li>
            <h3>Release Date</h3>
            <p>{movie.release_date}</p>
          </li>
          <li>
            <h3>Runtime</h3>
            <p>{movie.runtime} мин</p>
          </li>

          <li>
            <h3>Vote Average</h3>
            <p>{movie.vote_average}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map((item) => {
                return (
                  <li key={item.id}>
                    <p>{item.name}</p>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <h3>Production Countries</h3>
            <ul>
              {movie.production_countries.map((item) => {
                return (
                  <li key={item.name}>
                    <p>{item.name}</p>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
