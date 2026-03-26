import axios from "axios";
import { HOST } from "../constants/routes";

const api = axios.create({
    baseURL: HOST,
    withCredentials: true
})

export default api