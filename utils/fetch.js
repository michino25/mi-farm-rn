import axios from "axios";
import { useEffect } from "react";
// import { API_URL } from "@env";

export const api = axios.create({
  baseURL: "https://mi-farm-api.vercel.app/api",
  // baseURL: API_URL + "/api",
});

export function useFetch(callback) {
  useEffect(() => {
    const execute = async () => {
      callback();
    };
    execute();
  }, []);
}
