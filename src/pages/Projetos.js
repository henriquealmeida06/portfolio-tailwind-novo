import BlocoProjeto from "../components/BlocoProjeto";
import Urna from "./../assets/img/urna.png";
import Clima from "./../assets/img/clima.png";
import Calculadora from "./../assets/img/calculadora.png";
import Todo from "./../assets/img/img_todo.png";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiStyledcomponents } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";


function Projetos() {
  function abrirCalculadora() {
    window.open("https://calc7uladora.vercel.app/", "_blank");
  }
  function abrirUrna() {
    window.open("https://urna-eletronica-pi-snowy.vercel.app/", "_blank");
  }
  function abrirClima() {
    window.open("https://cli3ma.vercel.app/", "_blanck");
  }
  function abrirTodo() {
    window.open("https://to-do-list-gold-seven.vercel.app/", "_blank");
  }
  return (
    <div className=" text-white flex flex-col justify-start justify-center font-roboto1 mt-36">
      <h1 className="text-2xl font-bold text-center mb-24 md:mt-28">Projetos</h1>

      <div className="flex flex-wrap gap-11 items-center justify-center">
        <BlocoProjeto
          onClick={abrirUrna}
          imagem={Urna}
          nome="Urna (Em Construção)"
          tecnologia1={<FaHtml5 />}
          tecnologia2={<SiTailwindcss />}
          tecnologia3={<IoLogoJavascript />}
          tecnologia4={<FaReact />}
        />
        <BlocoProjeto
          onClick={abrirClima}
          imagem={Clima}
          nome="Clima do Tempo"
          tecnologia1={<FaHtml5 />}
          tecnologia2={<SiTailwindcss />}
          tecnologia3={<IoLogoJavascript />}
          tecnologia4={<FaReact />}
        />
        <BlocoProjeto
          onClick={abrirCalculadora}
          imagem={Calculadora}
          nome="Calculadora Xiaomi Dark"
          tecnologia1={<FaHtml5 />}
          tecnologia2={<SiTailwindcss />}
          tecnologia3={<IoLogoJavascript />}
          tecnologia4={<FaReact />}
        />
        <BlocoProjeto
          onClick={abrirTodo}
          imagem={Todo}
          nome="Lista de Tarefas"
          tecnologia1={<FaHtml5 />}
          tecnologia2={<SiTailwindcss />}
          tecnologia3={<IoLogoJavascript />}
          tecnologia4={<FaReact />}
        />
      </div>
    </div>
  );
}
export default Projetos;
