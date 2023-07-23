import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Login } from './pages/Login'
import { Transactions } from './pages/Transactions'
import './index.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

const isLoggedIn = localStorage.getItem('freyaFiUserLoggedIn')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={isLoggedIn ? <App /> : <Navigate replace to={'/login'} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transactions" element={<Transactions />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
