import Login from './pages/auth/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/register' element={<Register />} />
        <Route path='/items' element={<Itemlist />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/master' element={<MasterIndex />} /> */}
      </Routes>
    </Router>
  </>
}

export default App;
