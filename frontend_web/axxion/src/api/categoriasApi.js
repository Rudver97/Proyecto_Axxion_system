import axios from "axios";
const API_URL = "http://localhost:3306/api/categorias";

export const getCategorias = async () => await axios.get(API_URL);
export const getCategoria = async (id) => await axios.get(`${API_URL}/${id}`);
export const createCategoria = async (data) => await axios.post(API_URL, data);
export const updateCategoria = async (id, data) => await axios.put(`${API_URL}/${id}`, data);
export const deleteCategoria = async (id) => await axios.delete(`${API_URL}/${id}`);
