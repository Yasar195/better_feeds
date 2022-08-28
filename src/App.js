import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Scroll';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about/" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
