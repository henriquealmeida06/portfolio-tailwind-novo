
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function NavBar({onClick}) {
 
  return (
    <nav className="flex justify-around items-center bg-azulPadrao pt-5 pb-5 text-white font-roboto1 fixed border-1 border-b border-roxoBorda z-10 w-full z-20">
      <div className="lg:hidden md:hidden cursor-pointer hover:text-roxoBorda" onClick={onClick}>
        <GiHamburgerMenu />
      </div>

      <p className="text-3xl">
        <a href="#home">Portfólio</a>
      </p>

      <div className="mc:hidden md:block">
        <ul className="flex gap-10 list-none text-inherit">
          <li className="cursor-pointer hover:text-roxoBorda">
            <a href="#home">Página Inicial</a>
          </li>
          <li className="cursor-pointer hover:text-roxoBorda">
            <a href="#sobre">Sobre mim</a>
          </li>
          <li className="cursor-pointer hover:text-roxoBorda">
            <a href="#habilidades">Habilidades</a>
          </li>
          <li className="cursor-pointer hover:text-roxoBorda">
            <a href="#projetos">Projetos</a>
          </li>
          <li className="cursor-pointer hover:text-roxoBorda">
            <a href="#contatos">Contatos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
