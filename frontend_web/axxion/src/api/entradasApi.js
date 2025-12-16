import axios from "axios";
const API_URL = "http://localhost:3306/api/entradas";

export const getEntradas = async () => await axios.get(API_URL);
export const getEntrada = async (id) => await axios.get(`${API_URL}/${id}`);
export const createEntrada = async (data) => await axios.post(API_URL, data);
export const updateEntrada = async (id, data) => await axios.put(`${API_URL}/${id}`, data);
export const deleteEntrada = async (id) => await axios.delete(`${API_URL}/${id}`);
