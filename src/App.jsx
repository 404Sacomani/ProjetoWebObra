import { useState } from 'react'
import NavBar from '../src/assets/components/NavBar'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../src/assets/pages/HomePage'
import ArtigosPage from './assets/pages/ArtigosPage'
import AboutPage from '../src/assets/pages/AboutPage'
import SimuladoresPage from '../src/assets/pages/SimuladoresPage'
import Footer from '../src/assets/components/Footer'
import ArtigoPageFind from './assets/pages/ArtigosPageFind';
import UserPage from './assets/pages/UserPage'
import PagePainelControle from './assets/pages/PagePainelPrivate'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/login" element={<UserPage/>}/>
          <Route path="/admin/painel-controle" element={<PagePainelControle/>}/>
          <Route path="/blog/:slug" element={<ArtigoPageFind />} />
          <Route path="/blog" element={<ArtigosPage />} />
          <Route path="/simuladores" element={<SimuladoresPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
