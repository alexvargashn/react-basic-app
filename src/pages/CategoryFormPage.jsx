import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useCategory } from '../context/CategoryContext';
import { useNavigate, useParams } from 'react-router-dom';

const CategorieFormPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { getCategory, createCategory, updateCategory } = useCategory();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const get = async () => {
      if(params.id) {
        const {data} = await getCategory(params.id);
        return data;
      }
    }
    if( params.id)
      get().then(({ category }) => {
        setValue('name', category.name);
        setValue('description', category.description);
      });
  }, [])


  const onSubmit = handleSubmit((data) => {
    if(params.id) {
      updateCategory(params.id, data)
    } else {
      createCategory(data);
    }
    navigate('/categories');
  })
  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Category name</label>
        <input
          type="text" placeholder='Category name'
          {...register('name')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
        />
        <label htmlFor="description">Category description</label>
        <textarea
          rows="4" placeholder='Category description'
          {...register('description')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' >
        </textarea>
        <button className='bg-indigo-500 px-3 py-2 rounded-md'>Save</button>
      </form>
    </div>
  )
}
export default CategorieFormPage;
