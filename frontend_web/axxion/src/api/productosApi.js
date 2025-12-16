import axios from "axios";
const API_URL = "http://localhost:3306/api/productos";

export const getProductos = async () => await axios.get(API_URL);
export const getProducto = async (id) => await axios.get(`${API_URL}/${id}`);
export const createProducto = async (data) => await axios.post(API_URL, data);
export const updateProducto = async (id, data) => await axios.put(`${API_URL}/${id}`, data);
export const deleteProducto = async (id) => await axios.delete(`${API_URL}/${id}`);
