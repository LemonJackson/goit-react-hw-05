import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchCast } from "../../unsplash-api";

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
    <div>
      <ul>
        {cast.map((item) => {
          return (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                alt={item.character}
              />
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
