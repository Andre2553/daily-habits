import axios from "axios";

export const api = axios.create({
  baseURL: 'https://application-mock-server.loca.lt'
})