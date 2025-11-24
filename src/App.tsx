import './App.css'
import Header from './layouts/header-footer/Header'
import Footer from './layouts/header-footer/Footer'
import HomePage from './layouts/homepage/HomePage'
import About from './layouts/about/About'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { AppContextType } from './AppContext';
import { AppContext } from './AppContext';


function App() {
  const [keyWords, setKeyWords] = useState("");
  const [categoryId, setCategoryId] = useState(0);

  const ctxValue: AppContextType = {
    keyWords,
    setKeyWords,
    categoryId,
    setCategoryId
  };

  return (
    <>
      <div>
        <BrowserRouter>
          <AppContext.Provider value={ctxValue}>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />

            </Routes>
          </AppContext.Provider>
          <Footer />

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
