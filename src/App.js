import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Tsaks from './components/Tsaks';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthRoute } from './components/AuthRoute';
// import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(true);

  return (
    <BrowserRouter>
      <div className={dark ? `relative dark` : 'relative'}>
        <div className='bg-light dark:bg-darkbg text-darktext dark:text-lighttext min-h-[100vh]'>
          <Header dark={dark} setDark={setDark} />
          <Routes>
            <Route path='/login' element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            } />

            <Route path='/register' element={
              <AuthRoute>
                <Register />
              </AuthRoute>
            } />

            <Route path='/' element={
              <ProtectedRoute>
                <Tsaks />
              </ProtectedRoute>
            } />

          </Routes>
          {/* <Footer /> */}
          {/* <Tsaks /> */}
          {/* <Login /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
