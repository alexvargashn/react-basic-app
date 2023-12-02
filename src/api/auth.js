import axios from 'axios'

const API = 'http://localhost:8080/api';

export const registerRequest = user => axios.post(`${API}/users`, user);

export const loginRequest = user => axios.post(`${API}/auth/login`, user)