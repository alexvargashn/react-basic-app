import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useCategory } from '../context/CategoryContext'
import CategoryCard from '../components/CategoryCard'
import { Link } from 'react-router-dom'

const CategoriesPage = () => {
  const { getCategories, categories } = useCategory();

  useEffect(() => {
    getCategories();
  }, [])

  return (

    <div className='container'>
      <Link to='/add-category' className='bg-indigo-500 px-2 py-1 hover:bg-blue-950  rounded-md'>Add Category</Link>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {
          categories.map(category => {
            return <CategoryCard category={category} key={category._id} />
          })
        }
      </div>
    </div>
  )
}

export default CategoriesPage
