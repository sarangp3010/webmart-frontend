import axios from "axios";

export const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_DEVELOPMENT_HOST}${process.env.REACT_APP_API_PORT}`,
});

export const apiMiddleware = () => {
  API.interceptors.request.use(
    
  );

  API.interceptors.response.use(
  );
};