import Cookies from 'js-cookie';
import { useAuth } from '../context/AuthContext';
import axios from './axios';

const cookies = Cookies.get();

export const getCategoriesRequest = () => axios.get('/categories');

export const getCategoryRequest = (id) => axios.get(`/categories/${id}`);

export const createCategoryRequest = (category) => axios.post('/categories', category, {headers: {'rs_token': cookies.rs_token}});

export const updateCategoryRequest = (category) => axios.put(`/categories/${id}`, category);

export const deleteCategoriesRequest = (id) => axios.delete(`/categories/${id}`, {headers: {'rs_token': cookies.rs_token}});