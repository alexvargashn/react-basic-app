import { createContext, useContext, useState } from "react";
import {
    getCategoriesRequest,
    getCategoryRequest,
    createCategoryRequest,
    updateCategoryRequest,
    deleteCategoriesRequest
} from './../api/category';

const CategoryContext = createContext();

export const useCategory = () => {
    const context = useContext(CategoryContext);

    if(!context) {
        throw new Error('useCategory must be used whithin CategoryProvider');
    }

    return context;
}

export const CategoryProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const res = await getCategoriesRequest();
            setCategories(res.data.categories);
        } catch (error) {
            console.log(error);
        }
    }

    const getCategory = async (id) => {
        try {
            const res = getCategoryRequest(id);
            return res;
        } catch (error) {
            return error;
        }
    }

    const createCategory = async (category) => {
        const res = await createCategoryRequest(category);
        return res;
    }

    const updateCategory = async (id, category) => {
        const res = await updateCategoryRequest(id, category);
        return res;
    }

    const deleteCategory = async( id ) => {
        try {
            const { data } = await deleteCategoriesRequest( id );
            if(data.ok) setCategories(categories.filter(c => c._id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CategoryContext.Provider value={{
            categories,
            getCategories,
            getCategory,
            createCategory,
            updateCategory,
            deleteCategory
        }}>
            {children}
        </CategoryContext.Provider>
    )
}