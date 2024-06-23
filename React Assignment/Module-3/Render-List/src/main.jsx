import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FruitList from './FruitList'
import App from './App'
import { useState } from 'react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FruitList />
  </React.StrictMode>,
)
