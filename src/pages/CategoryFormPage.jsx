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
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={onSubmit}>
        <input
          type="text" placeholder='Category name'
          {...register('name')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
        />
        <textarea
          rows="4" placeholder='Category description'
          {...register('description')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' >
        </textarea>
        <button>Save</button>
      </form>
    </div>
  )
}
export default CategorieFormPage;
