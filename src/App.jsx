import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './views/home.jsx';
import List from './views/list.jsx';
import Details from './views/details.jsx';
import "bootstrap/dist/css/bootstrap.css";
import NotFound from './views/not-found.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
