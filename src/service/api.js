import axios from "axios";

const apiURL = "http://localhost:5000";

export const api = axios.create({
    baseURL: apiURL,
})
