export default function MovieInfo({ movie }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.original_title}
      />
      <h2>{movie.title}</h2>
      <ul>
        <li>
          <h3>Дата Релиза</h3>
          <p>{movie.release_date}</p>
        </li>
        <li>
          <h3>Время</h3>
          <p>{movie.runtime} мин</p>
        </li>

        <li>
          <h3>Рейтинг</h3>
          <p>{movie.vote_average}</p>
        </li>
        <li>
          <h3>Жанр</h3>
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
          <h3>Страна производства</h3>
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
          <h3>Описание</h3>
          <p>{movie.overview}</p>
        </li>
      </ul>
    </div>
  );
}
