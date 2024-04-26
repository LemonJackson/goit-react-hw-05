import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchReviews } from "../../unsplash-api";

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
    <div>
      <ul>
        {reviews.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.author}</p>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
