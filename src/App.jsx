import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} /> 
          <Route path='/login' element={ <LoginPage /> } /> 
          <Route path='/register' element={ <RegisterPage /> } /> 
          <Route path='/task' element={<h1>Tasks page</h1>} /> 
          <Route path='/add-task' element={<h1>New Task</h1>} /> 
          <Route path='task/:id' element={<h1>Update Task</h1>} /> 
          <Route path='/profile' element={<h1>My Profile</h1>} /> 
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

