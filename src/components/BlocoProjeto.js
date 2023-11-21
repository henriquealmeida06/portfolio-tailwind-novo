import Urna from "./../assets/img/urna.png";
import { IoLogoJavascript } from "react-icons/io5";

function BlocoProjeto({
  imagem,
  nome,
  tecnologia1,
  tecnologia2,
  tecnologia3,
  tecnologia4,
  onClick,
  nome_tecnologia,
}) {
  return (
    <div onClick={onClick} className="flex flex-col md:max-w-md mc:w-96 font-roboto1 transition-transform duration-200 hover:scale-110 cursor-pointer">
      <div className="overflow-hidden flex justify-center items-center w-full h-full bg-black border-b-4 border-roxoBorda">
        <img className="opacity-50 hover:opacity-100" src={imagem} />
      </div>

      <div className="w-full bg-cinzaChumbo flex items-center justify-around h-20 overflow-hidden rounded-br-3xl rounded-b-3xl">
        <div className="flex">
          <p>{nome}</p>
        </div>
        <div className="flex flex-row justify-center ">
          <span className="flex flex-wrap text-roxoBorda md:text-3xl mc:text-2xl gap-4">
            {tecnologia1}
            {tecnologia2}
            {tecnologia3}
            {tecnologia4}
          </span>
        </div>
      </div>
    </div>
  );
}
export default BlocoProjeto;
