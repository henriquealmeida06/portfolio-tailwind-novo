import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Habilidades from './pages/Habilidades'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import NavBar from './components/NavBar'
import SideBar from "./components/SideBar";
import {useState} from "react";



function App() {

  const [abrirSide, setAbrirSide] = useState(false)

  function toogleSideBar(){
    setAbrirSide(!abrirSide)
    console.log(abrirSide)
  }
  

  
  return (
    
    <div className="App">
      <NavBar onClick={toogleSideBar} />
      
      
      
      <div className=" bg-azulPadrao sm:px-20 md:px-20 mc:pb-11 mc:pt-20 md:pt-0">
        <div>
          {abrirSide && (
            <SideBar/>
          )}
        </div>
       
      <section id="home">
        <Home />
      </section>
      <section id="sobre"></section>
      <Sobre/>
      <section id="habilidades">
        <Habilidades/>
      </section>
      <section id="projetos">
        <Projetos/>
      </section>
      <section id="contatos">
        <Contato/>

      </section>
    </div>
    
    </div>
  );
}

export default App;
