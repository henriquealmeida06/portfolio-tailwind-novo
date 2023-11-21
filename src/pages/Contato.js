
import IconesContato from "../components/IconesContato";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contato() {
  function abrirGithub() {
    window.open("https://github.com/henriquealmeida06", "_blank");
  }
  function abrirLinkedin() {
    window.open("https://www.linkedin.com/in/henriquealmeida06/", "_blank");
  }
  function abrirWhatsapp() {
    window.open("https://wa.me/+5582998212896", "_blank");
  }
  function abrirEmail() {
    window.open("mailto:marceloh500@gmail.com", "_blank");
  }

  return (
    <div className="text-white font-roboto1 font-bold lg:h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl mc:mt-32">Contatos</h1>
      <div className="mt-32 flex lg:flex-row md:flex-row justify-center items-center gap-20 flex-wrap mc:flex-col">
        <IconesContato
          onClick={abrirEmail}
          icone={<HiOutlineMail />}
          categoria="Email"
          valor="marceloh500@gmail.com"
        />
        <IconesContato
          onClick={abrirWhatsapp}
          icone={<BsTelephone />}
          categoria="Telefone"
          valor="(82) 99821-2896"
        />
        <IconesContato
          onClick={abrirLinkedin}
          icone={<FaLinkedinIn />}
          categoria="Linkedin"
          valor="@henriquealmeida06"
        />
        <IconesContato
          onClick={abrirGithub}
          icone={<FaGithub />}
          categoria="Github"
          valor="@henriquealmeida06"
        />
      </div>
    </div>
  );
}
export default Contato;
