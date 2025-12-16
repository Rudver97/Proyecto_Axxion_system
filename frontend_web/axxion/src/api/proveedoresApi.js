import axios from "axios";
const API_URL = "http://localhost:3306/api/proveedores";

export const getProveedores = async () => await axios.get(API_URL);
export const getProveedor = async (id) => await axios.get(`${API_URL}/${id}`);
export const createProveedor = async (data) => await axios.post(API_URL, data);
export const updateProveedor = async (id, data) => await axios.put(`${API_URL}/${id}`, data);
export const deleteProveedor = async (id) => await axios.delete(`${API_URL}/${id}`);
