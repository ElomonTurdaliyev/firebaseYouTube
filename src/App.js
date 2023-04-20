import Login from './components/login/Login';
import Register from './components/register/Register'
import { auth } from './components/firebase';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import ForgetPassword from './components/forgetPassword/ForgetPassword';
import ZoomVideo from './components/zoomVideo/ZoomVideo'
function App() {

    const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home user={user} />} />
      <Route path='/about' element={user ? <About /> : <Navigate to='/login' />} />
      <Route path='/about/news/:id' element={<ZoomVideo/>} />
      <Route path="/login" element={user ? <Navigate to='/about' /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to='/login' /> : <Register />} />
      <Route path="/forgetPassword" element={user ? <Navigate to='/login' /> : <ForgetPassword />} />
  </Routes>
  );
}

export default App;






