import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Scroll';
import { ClipLoader } from 'react-spinners';
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div>
      {
        loading ?
        <div className='loading'>
          <ClipLoader
            color={'#00A851'}
            loading={loading}
            size={100}
          />
        </div>
        :
        <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about/" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
