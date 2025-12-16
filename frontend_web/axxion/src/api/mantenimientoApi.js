import axios from "axios";
const API_URL = "http://localhost:3306/api/mantenimiento";

export const getMantenimientos = async () => await axios.get(API_URL);
export const getMantenimiento = async (id) => await axios.get(`${API_URL}/${id}`);
export const createMantenimiento = async (data) => await axios.post(API_URL, data);
export const updateMantenimiento = async (id, data) => await axios.put(`${API_URL}/${id}`, data);
export const deleteMantenimiento = async (id) => await axios.delete(`${API_URL}/${id}`);
