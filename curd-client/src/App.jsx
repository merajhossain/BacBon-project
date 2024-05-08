import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layouts from './layouts/Layouts';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Layouts>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/create' element={<CreatePage />} />
            <Route path='/single/:id' element={<UpdatePage />} />
          </Routes>
        </Layouts>
      </BrowserRouter>
    </>
  )
}

export default App
