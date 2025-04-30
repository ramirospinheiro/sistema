import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './pages/Login'
import CadastroPage from './pages/Cadastro'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LoginPage/>}/>
        <Route path='/Cadastro' element = {<CadastroPage/>}/>
                
      </Routes>
    </BrowserRouter>
  )
}

