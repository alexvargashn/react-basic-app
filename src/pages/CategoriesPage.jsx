import React from 'react'
import { useForm } from 'react-hook-form'

const CategoriesPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit( (data) => {
    console.log(data);
  })
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text" placeholder='Category name'
          {...register('name')}
          autoFocus
        />
        <textarea
          rows="4" placeholder='Category description'>
          {...register('description')}
        </textarea>
        <button>Save</button>
      </form>
    </div>
  )
}

export default CategoriesPage
