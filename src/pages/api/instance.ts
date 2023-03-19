import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.wisey.app/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwZDE4My0yZTk1LTRlYjktOWQ1ZS0zODA2NTUyNjFhNWUiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5OTgzNDQsImV4cCI6MTY3OTg5ODM0NH0.G2cQQVKC9VgP3SbQ7f15vTqnabcfw-2x0O2m0bAWdv0',
  },
});

export default axiosInstance;
