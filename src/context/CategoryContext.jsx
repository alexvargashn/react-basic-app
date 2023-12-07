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

    const createCategory = async (category) => {
        console.log(category)
        const res = await createCategoryRequest(category);
        console.log(res);
    }

    return (
        <CategoryContext.Provider value={{
            categories,
            getCategories,
            createCategory
        }}>
            {children}
        </CategoryContext.Provider>
    )
}