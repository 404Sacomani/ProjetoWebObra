import { useState } from 'react'
import NavBar from '../src/assets/components/NavBar'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../src/assets/pages/HomePage'
import ServicePage from '../src/assets/pages/ServicePage'
import AboutPage from '../src/assets/pages/AboutPage'
import ContactPage from '../src/assets/pages/ContactPage'
import Footer from '../src/assets/components/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
      <NavBar/>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
