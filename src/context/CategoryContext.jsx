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

    const createCategory = async (category) => {
        console.log(category)
        const res = await createCategoryRequest(category);
        console.log(res);
    }

    return (
        <CategoryContext.Provider value={{
            categories,
            createCategory
        }}>
            {children}
        </CategoryContext.Provider>
    )
}