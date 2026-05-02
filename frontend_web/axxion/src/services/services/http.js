import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3333/Api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para enviar token
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default http;
