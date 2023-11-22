import { AiOutlineHome } from "react-icons/ai";
import { RiFileHistoryLine } from "react-icons/ri";
import { GrVulnerability } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { LuContact2 } from "react-icons/lu";

function SideBar(){
    return(
        <div class="bg-azulPadrao w-52 h-screen text-white flex justify-center items-start pt-28 font-roboto1 fixed border-1 border-r border-roxoBorda z-10 md:hidden ">
            <ul>
                <li className="flex justify-start items-center gap-3 text-lg mb-3 ">
                <AiOutlineHome />
                    <a href="">Página Inicial</a>
                </li>
                <li className="flex justify-start items-center gap-3 text-lg mb-3">
                <RiFileHistoryLine />
                    <a href="">Sobre Mim</a>
                </li>
                <li className="flex justify-start items-center gap-3 text-lg mb-3 b">
                <GrVulnerability />
                    <a href="">Habilidades</a>
                </li>
                <li className="flex justify-start items-center gap-3 text-lg mb-3 ">
                <GrProjects />
                    <a href="">Projetos</a>
                </li>
                <li className="flex justify-start items-center gap-3 text-lg mb-3 b">
                <LuContact2 />
                    <a href="">Contatos</a>
                </li>
            </ul>

        </div>
    )
}
export default SideBar;