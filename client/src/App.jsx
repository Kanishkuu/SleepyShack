
import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Home from './assets/pages/Home'
import List from './assets/pages/List'
import Hotel from './assets/pages/Hotel';

function App(){
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hotels" element={<List/>}/>
          <Route path="/hotels/:id" element={<Hotel/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
