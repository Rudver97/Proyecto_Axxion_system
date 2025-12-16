import axios from "axios";
const API_URL = "http://localhost:3306/api/subcategorias";

export const getSubcategorias = async () => await axios.get(API_URL);
export const getSubcategoria = async (id) => await axios.get(`${API_URL}/${id}`);
export const createSubcategoria = async (data) => await axios.post(API_URL, data);
export const updateSubcategoria = async (id, data) => await axios.put(`${API_URL}/${id}`, data);
export const deleteSubcategoria = async (id) => await axios.delete(`${API_URL}/${id}`);
