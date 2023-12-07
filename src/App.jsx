import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'
import CategoriesPage from './pages/CategoriesPage'
import ProductsPage from './pages/ProductsPage'
import CategoryFormPage from './pages/CategoryFormPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import ProductFormPage from './pages/ProductFormPage'
import ProtectedRoute from './ProtectedRoute'
import { CategoryProvider } from './context/CategoryContext'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route element={<ProtectedRoute />}>
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/categories' element={<CategoriesPage />} />
                <Route path='/categories/:id' element={<CategoryFormPage />} />
                <Route path='/add-category' element={<CategoryFormPage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/products/:id' element={<ProductFormPage />} />
                <Route path='/add-product' element={<ProductFormPage />} />
              </Route>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
      </CategoryProvider>
    </AuthProvider>
  )
}

