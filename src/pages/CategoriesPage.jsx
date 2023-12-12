import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useCategory } from '../context/CategoryContext'
import CategoryCard from '../components/CategoryCard'

const CategoriesPage = () => {
  const { getCategories, categories } = useCategory();

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <div className='grid grid-cols-3 gap-2'>
      {
        categories.map( category => {
          return <CategoryCard category={category} key={category._id} />
        })
      }
    </div>
  )
}

export default CategoriesPage
