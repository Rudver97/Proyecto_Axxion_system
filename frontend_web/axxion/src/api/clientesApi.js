import axios from "axios";
const API_URL = "http://localhost:3306/api/clientes";

export const getClientes = async () => await axios.get(API_URL);
export const getCliente = async (id) => await axios.get(`${API_URL}/${id}`);
export const createCliente = async (data) => await axios.post(API_URL, data);
export const updateCliente = async (id, data) => await axios.put(`${API_URL}/${id}`, data);
export const deleteCliente = async (id) => await axios.delete(`${API_URL}/${id}`);
