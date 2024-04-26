import { useState, useEffect } from "react";

import Loader from "../components/Loader/Loader";
import MoviesList from "../components/MoviesList/MoviesList";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";

import { fetchMovies } from "../unsplash-api";
import Searchbar from "../components/SearchBar/SearchBar";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(true);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setMovies([]);
    setShowBtn(true);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getMovies() {
      try {
        setIsLoading(true);
        const data = await fetchMovies(query, page);
        setMovies([...movies, ...data.results]);
        if (data.total_pages === page) {
          setShowBtn(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [query, page]);

  return (
    <div>
      <h1>Search Movie</h1>
      <Searchbar onSearch={handleSearch} />

      <MoviesList items={movies} />

      {isLoading && <Loader />}

      {movies.length > 0 && !isLoading && showBtn && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}
