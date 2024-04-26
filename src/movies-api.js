import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function fetchTopMovies(page) {
    const response = await axios.get('/trending/movie/day', {
        params: {
            language: 'en-US',
            api_key: '848489988be602851cecfcd100b59fb4',
            page: page,
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDg0ODk5ODhiZTYwMjg1MWNlY2ZjZDEwMGI1OWZiNCIsInN1YiI6IjY2MjkzZjU1NGE0YmY2MDE2NTc3MmFiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4pbFkjbUZKHg4E_S1rDp9L89keBB4zRpss6B7X2R1SQ'
        }
    });
    return response.data;
};

export async function fetchMovies(query, page) {
    const response = await axios.get('/search/movie', {
        params: {
            language: 'en-US',
            api_key: '848489988be602851cecfcd100b59fb4',
            page: page,
            query: query,
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDg0ODk5ODhiZTYwMjg1MWNlY2ZjZDEwMGI1OWZiNCIsInN1YiI6IjY2MjkzZjU1NGE0YmY2MDE2NTc3MmFiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4pbFkjbUZKHg4E_S1rDp9L89keBB4zRpss6B7X2R1SQ'
        }
    });
    return response.data;
};

export async function fetchMovie(movieId) {
    const response = await axios.get(`/movie/${movieId}`, {
        params: {
            api_key: '848489988be602851cecfcd100b59fb4',
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDg0ODk5ODhiZTYwMjg1MWNlY2ZjZDEwMGI1OWZiNCIsInN1YiI6IjY2MjkzZjU1NGE0YmY2MDE2NTc3MmFiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4pbFkjbUZKHg4E_S1rDp9L89keBB4zRpss6B7X2R1SQ'
        }
    });
    return response.data;
};

export async function fetchCast(movieId) {
    const response = await axios.get(`/movie/${movieId}/credits`, {
        params: {
            api_key: '848489988be602851cecfcd100b59fb4',
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDg0ODk5ODhiZTYwMjg1MWNlY2ZjZDEwMGI1OWZiNCIsInN1YiI6IjY2MjkzZjU1NGE0YmY2MDE2NTc3MmFiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4pbFkjbUZKHg4E_S1rDp9L89keBB4zRpss6B7X2R1SQ'
        }
    });
    return response.data;
};

export async function fetchReviews(movieId) {
    const response = await axios.get(`/movie/${movieId}/reviews`, {
        params: {
            api_key: '848489988be602851cecfcd100b59fb4',
            page: '1',
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDg0ODk5ODhiZTYwMjg1MWNlY2ZjZDEwMGI1OWZiNCIsInN1YiI6IjY2MjkzZjU1NGE0YmY2MDE2NTc3MmFiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4pbFkjbUZKHg4E_S1rDp9L89keBB4zRpss6B7X2R1SQ'
        }
    });
    return response.data;
};