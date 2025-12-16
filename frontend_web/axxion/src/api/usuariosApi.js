import axios from "axios";
const API_URL = "http://localhost:3306/api/usuarios";

export const getUsuarios = async () => await axios.get(API_URL);
export const getUsuario = async (id) => await axios.get(`${API_URL}/${id}`);
export const createUsuario = async (data) => await axios.post(API_URL, data);
export const updateUsuario = async (id, data) => await axios.put(`${API_URL}/${id}`, data);
export const deleteUsuario = async (id) => await axios.delete(`${API_URL}/${id}`);
