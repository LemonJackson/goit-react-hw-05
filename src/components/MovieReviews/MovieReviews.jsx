import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchReviews } from "../../movies-api";

import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const data = await fetchReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <ul className={css.list}>
      {reviews.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <h2 className={css.name}>{item.author}</h2>
            <p className={css.text}>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
}
