import styles from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function NavBar() {
  const [sideBar, setSideBar] = useState(false);

  function showSideBar() {
    setSideBar(!sideBar);
  }

  return (
    <nav>
      <div className="lg:hidden md:hidden cursor-pointer">
        <GiHamburgerMenu onClick={showSideBar} />
      </div>

      <p className={styles.p_portifolio}>
        <a href="#home">Portfólio</a>
      </p>

      <div className={styles.menuDesktop}>
        <ul>
          <li>
            <a href="#home">Página Inicial</a>
          </li>
          <li>
            <a href="#sobre">Sobre mim</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contatos">Contatos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
