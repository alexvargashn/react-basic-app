import axios from './axios';

export const registerRequest = user => axios.post(`/users`, user);

export const loginRequest = user => axios.post(`/auth/login`, user);

export const verifyTokenRequest = (token) => axios.get('/auth/verify', {headers: {'rs_token': token}});   