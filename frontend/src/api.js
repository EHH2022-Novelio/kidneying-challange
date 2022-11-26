import axios from "axios";
const url = "http://localhost:5000/api";

const api = {};

api.login = async (data) => (await axios.post(url + "/login", data)).data;

api.register = async (data) => (await axios.post(url + "/register", data)).data;

export default api;