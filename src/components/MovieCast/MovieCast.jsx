import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchCast } from "../../movies-api";

import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const data = await fetchCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div className={css.cast}>
      <ul className={css.list}>
        {cast.map((item) => {
          return (
            <li className={css.item} key={item.id}>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                alt={item.character}
              />
              <p className={css.name}>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
