import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Containt from './Containt'
import About from './About'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        {/* <Route index element={<Contint />} /> */}
        <Route path='/about-us' element={<About />} />
        <Route path='/our-Product' element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)