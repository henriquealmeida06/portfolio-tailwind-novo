import Logo from "./../assets/img/fotoPortfolio.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Home() {
  function abrirLinkedin() {
    window.open("https://www.linkedin.com/in/henriquealmeida06/", "_blank");
  }

  function abrirGithub() {
    window.open("https://github.com/henriquealmeida06", "_blanck");
  }

  function enviarEmail() {
    window.open("mailto:marceloh500@gmail.com", "_blank");
  }

  return (
    <div className="bg-azulPadrao font-roboto1  flex sm:flex-col mc:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row font-roboto justify-evenly h-screen items-center md:p-20 lg:p-32 ">
      <div className="md:border-l border-roxoBorda lg:order-1 p-5 sm:order-2  mc:order-2 sm:text-center mc: text-center">
        <p className="text-white md:text-2xl sm:text-2xl mb-3 mc:text-2xl lg:text-left">
          Olá! Eu sou
        </p>
        <p className="text-roxoBorda md:text-5xl sm:text-5xl font-bold mb-4 mc:text-5xl lg:text-left">
          Henrique Almeida
        </p>
        <p className="text-gray-500 md:text-xl sm:text-lg mc:text-xl mb-4 lg:text-left">
          Desenvolvedor Front-End
        </p>
        <div className="md:space-x-4 sm: space-x-7 lg:text-left lg:space-x-9">
          <button
            onClick={abrirLinkedin}
            className="md:p-3 md:text-3xl text-roxoBorda sm:p-3 sm:text-2xl bg-fundoContato rounded-full mc:p-3 mc:text-2xl transition-transform duration-150 transform hover:scale-125"
          >
            <FaLinkedinIn />
          </button>
          <button
            onClick={abrirGithub}
            className="md:p-3 md:text-3xl sm:p-3 sm:text-2xl text-roxoBorda bg-fundoContato rounded-full mc:p-3 mc:text-2xl transition-transform duration-150 transform hover:scale-125"
          >
            <FaGithub />
          </button>
          <button
            onClick={enviarEmail}
            className="md:p-3 md:text-3xl sm:p-3 sm:text-2xl text-roxoBorda bg-fundoContato rounded-full mc:p-3 mc:text-2xl transition-transform duration-150 transform hover:scale-125"
          >
            <MdOutlineEmail />
          </button>
        </div>
      </div>
     
        <img
          className="w-80 md:w-72 rounded-perfil border-2 border-roxoBorda sm:order-1 md:order-3 mc:order-1 "
          src={Logo}
        />
      
    </div>
  );
}
export default Home;
