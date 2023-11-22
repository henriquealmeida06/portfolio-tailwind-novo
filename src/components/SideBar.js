import { AiOutlineHome } from "react-icons/ai";
import { RiFileHistoryLine } from "react-icons/ri";
import { GrVulnerability } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { LuContact2 } from "react-icons/lu";

function SideBar(props){
    return(
        <div class="bg-azulPadrao w-52 h-screen text-white flex justify-center items-start pt-28 font-roboto1 fixed border-1 border-r border-roxoBorda z-10 md:hidden ">
            <ul>
                <li className="flex justify-start items-center gap-3 text-lg mb-3 ">
                <AiOutlineHome />
                    <a href={props.secao1}>Página Inicial</a>
                </li>
                <li className="flex justify-start items-center gap-3 text-lg mb-3">
                <RiFileHistoryLine />
                    <a href={props.secao2}>Sobre Mim</a>
                </li>
                <li className="flex justify-start items-center gap-3 text-lg mb-3 b">
                <GrVulnerability />
                    <a href={props.secao3}>Habilidades</a>
                </li>
                <li className="flex justify-start items-center gap-3 text-lg mb-3 ">
                <GrProjects />
                    <a href={props.secao4}>Projetos</a>
                </li>
                <li className="flex justify-start items-center gap-3 text-lg mb-3 b">
                <LuContact2 />
                    <a href={props.secao5}>Contatos</a>
                </li>
            </ul>

        </div>
    )
}
export default SideBar;