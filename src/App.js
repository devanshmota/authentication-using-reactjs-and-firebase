import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='/sign-in' element={<Signin/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
