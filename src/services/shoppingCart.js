import axios from "axios";
import { handleResponse } from "utils/handle-response";

export const BASE_URL = "https://rickandmortyapi.com/api";

const api = axios.create({
  baseURL: BASE_URL
});

export async function getProducts() {
  try {
    const res = await api.get("/products");
    return handleResponse({ data: res.data });
  } catch (err) {
    return handleResponse({ hasError: true, error: err });
  }
}
