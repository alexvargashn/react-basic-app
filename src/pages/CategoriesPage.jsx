import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useCategory } from '../context/CategoryContext'

const CategoriesPage = () => {
  const { getCategories, categories } = useCategory();

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <div>
      {
        categories.map( category => {
          return (
            <div key={category._id}>
              <h1>{ category.name }</h1>
              <p>{ category.description }</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default CategoriesPage
