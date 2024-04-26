import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Loader from "../../components/Loader/Loader";
import MoviesList from "../../components/MoviesList/MoviesList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Searchbar from "../../components/SearchBar/SearchBar";

import { fetchMovies } from "../../movies-api";

import css from "./MoviesPage.module.css";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(true);
  // const [query, setQuery] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const handleSearch = (value) => {
    setSearchParams({ query: value });
    setPage(1);
    setMovies([]);
    setShowBtn(true);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    async function getMovies() {
      try {
        setIsLoading(true);
        const data = await fetchMovies(searchQuery, page);
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
  }, [searchQuery, page]);

  return (
    <div className={css.page}>
      <Searchbar onSearch={handleSearch} />

      <MoviesList items={movies} />

      {isLoading && <Loader />}

      {movies.length > 0 && !isLoading && showBtn && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}
