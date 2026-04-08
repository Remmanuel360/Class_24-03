import {BrowserRouter as Router, Route, Routes, Link} from 'react-router';
import './App.css'

import Informativa from './Informativa';
import Equipo from './Equipo';
import Favoritos from './Favoritos';
import Home from './Home';
import Original from './Original';
import Usuario from './Usuario';


function App() {
  
  

  return (
    <>
      <Router>
          <nav className='c-menu'>
          <Link to="/Equipo">Equipo</Link>
          <Link to="/Favoritos">Favoritos</Link>
          <Link to="/Home">Home</Link>
          <Link to="/Informativa">Informativa</Link>
          <Link to="/Original">Original</Link>
          <Link to="/Usuario">Usuario</Link>
          </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Equipo/:equipo' element={<Equipo/>}/>
          <Route path='/Favoritos' element={<Favoritos/>}/>
          <Route path='/Informativa' element={<Informativa/>}/>
          <Route path='/Original' element={<Original/>}/>
          <Route path='/Usuario' element={<Usuario/>}/>
          
        </Routes>

      </Router>
      
    </>
  )
}

export default App
