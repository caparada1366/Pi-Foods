import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LandingP from './Components/LandingPage/LandingP'
import CardContainer from './Components/CardContainer/CardContainer'
import FormCreateRecipe from './Components/FormCrearReceta/FormCrearReceta'
import Detail from './Components/Detail/Detail';
import {useLocation, Routes, Route, useNavigate} from 'react-router-dom'

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  function onSearch(receta){

  }
  
  function onClick(){
    navigate('/home')
  }

  return (
    <div className="App">
     {location.pathname === '/' ? <LandingP onClick={onClick}></LandingP> : <NavBar onSearch={onSearch}></NavBar>}
     <Routes>
      <Route path='/home' element={<CardContainer/>}></Route>
      <Route path='/form' element={<FormCreateRecipe/>}></Route>
      <Route path='/detail/:id' element={<Detail/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
