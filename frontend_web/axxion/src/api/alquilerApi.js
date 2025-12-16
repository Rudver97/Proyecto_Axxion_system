import axios from "axios";
const API_URL = "http://localhost:3306/api/alquiler";

export const getAlquileres = async () => await axios.get(API_URL);
export const getAlquiler = async (id) => await axios.get(`${API_URL}/${id}`);
export const createAlquiler = async (data) => await axios.post(API_URL, data);
export const updateAlquiler = async (id, data) => await axios.put(`${API_URL}/${id}`, data);
export const deleteAlquiler = async (id) => await axios.delete(`${API_URL}/${id}`);
