import Home from "./pages/Home";
import Sobre from "./pages/Sobre";


function App() {
  return (
    <div className="App bg-azulPadrao sm:px-20 md:px-20">
      <section></section>
      <section id="home">
        <Home />
      </section>
      <section id="sobre"></section>
      <Sobre/>
      <section id="habilidades"></section>
      <section id="projetos"></section>
      <section id="contatos"></section>
    </div>
  );
}

export default App;
