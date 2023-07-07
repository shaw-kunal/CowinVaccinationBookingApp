import axios from "axios"
const BASE_URL = "http://localhost:8800/api/";
const Token = localStorage.getItem("token");

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers: { token: `${Token}`}

})