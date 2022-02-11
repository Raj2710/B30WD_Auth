import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/SignUp'
import Dashboard from './components/Dashboard';
function App() {
  return <>
    <BrowserRouter>

      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>

    </BrowserRouter>
  </>
}

export default App;
