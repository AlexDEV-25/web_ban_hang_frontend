import './App.css'
import Header from './layouts/header-footer/Header'
import Footer from './layouts/header-footer/Footer'
import HomePage from './layouts/homepage/HomePage'
import { useState } from 'react';
function App() {
  const [keyWords, setKeyWords] = useState("");
  return (
    <>
      <div>
        <Header keyWords={keyWords} setKeyWords={setKeyWords} />
        <HomePage keyWords={keyWords} />
        <Footer />
      </div>
    </>
  )
}

export default App
