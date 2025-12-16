import axios from "axios";
const API_URL = "http://localhost:3306/api/salida";

export const getSalidas = async () => await axios.get(API_URL);
export const getSalida = async (id) => await axios.get(`${API_URL}/${id}`);
export const createSalida = async (data) => await axios.post(API_URL, data);
export const updateSalida = async (id, data) => await axios.put(`${API_URL}/${id}`, data);
export const deleteSalida = async (id) => await axios.delete(`${API_URL}/${id}`);
