import React from 'react'
import { useCategory } from '../context/CategoryContext';

const CategoryCard = ({ category }) => {

    const { deleteCategory } = useCategory()

    return (
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            <header className='flex justify-between'>
                <h1 className='text-2xl font-bold'>{category.name}</h1>
                <div className='flex gap-x-2 items-center'>
                    <button onClick={ () => {
                        deleteCategory(category._id);
                    }}>delete</button>
                    <button>edit</button>
                </div>
            </header>
            <p className='text-slate-300'>{category.description}</p>
        </div>
    )
}

export default CategoryCard;
