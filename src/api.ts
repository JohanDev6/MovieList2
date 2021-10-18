import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmExMGFmZDhkZDA0NzMxNDM1YzQ0Mzc1Yzk0YTc1ZCIsInN1YiI6IjYxNGJkZWQ1YzI4MjNhMDA2NDQyZDRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WFiyDfs7Xdi5LyfZAcNprcGYT-MavRaVKO4OXIsWp7c',
      'Content-Type': 'application/json',
    }
});

export default api;
