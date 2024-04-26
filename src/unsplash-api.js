import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function fetchTopMovies(page) {
    const response = await axios.get('/trending/movie/day', {
        params: {
            include_adult: 'true',
            api_key: '848489988be602851cecfcd100b59fb4',
            page: page,
        },
    });
    return response.data;
};

export async function fetchMovies(query, page) {
    const response = await axios.get('/search/movie', {
        params: {
            include_adult: 'true',
            api_key: '848489988be602851cecfcd100b59fb4',
            page: page,
            query: query,
        },
    });
    return response.data;
};

export async function fetchMovie(movieId) {
    const response = await axios.get(`/movie/${movieId}`, {
        params: {
            api_key: '848489988be602851cecfcd100b59fb4',
        },
    });
    return response.data;
};

export async function fetchCast(movieId) {
    const response = await axios.get(`/movie/${movieId}/credits`, {
        params: {
            api_key: '848489988be602851cecfcd100b59fb4',
        },
    });
    return response.data;
};

export async function fetchReviews(movieId) {
    const response = await axios.get(`/movie/${movieId}/reviews`, {
        params: {
            api_key: '848489988be602851cecfcd100b59fb4',
            page: '1',
        },
    });
    return response.data;
};