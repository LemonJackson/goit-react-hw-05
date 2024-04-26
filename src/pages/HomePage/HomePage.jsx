import { useState, useEffect } from "react";

import Loader from "../../components/Loader/Loader";
import MoviesList from "../../components/MoviesList/MoviesList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

import { fetchTopMovies } from "../../movies-api";

import css from "./HomePage.module.css";

export default function HomePage() {
  const [topMovies, setTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(true);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function getTopMovies() {
      try {
        setIsLoading(true);
        const data = await fetchTopMovies(page);
        setTopMovies([...topMovies, ...data.results]);
        if (data.total_pages === page) {
          setShowBtn(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getTopMovies();
  }, [page]);

  return (
    <div className={css.page}>
      <h1 className={css.title}>Tranding Today</h1>

      <MoviesList items={topMovies} />

      {isLoading && <Loader />}

      {topMovies.length > 0 && !isLoading && showBtn && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}
