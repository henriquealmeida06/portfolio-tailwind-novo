import {FaHtml5, FaCss3Alt, FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io5'
import {SiStyledcomponents} from 'react-icons/si'
import { SiTailwindcss } from "react-icons/si";
import IconesHabilidades from '../components/IconesHabilidades'

function Habilidades(){
    return(
        <div className="font-roboto1 text-white flex flex-col justify-center items-center">
            <h1 className=" text-2xl font-bold text-center md:mt-28">Habilidades</h1>
            <div className="flex gap-16 items-center justify-center mt-28 font-roboto1 flex-wrap w-3/4">
            <IconesHabilidades habilidade="HTML5" icone={<FaHtml5/>}/>
            <IconesHabilidades habilidade="CSS3" icone={<FaCss3Alt/>}/>
            <IconesHabilidades habilidade="JavaScript" icone={<IoLogoJavascript/>}/>
            <IconesHabilidades habilidade="React" icone={<FaReact/>}/>
            <IconesHabilidades habilidade="Tailwind" icone={<SiTailwindcss />}/>
            <IconesHabilidades habilidade="CSS-in-JS" icone={<SiStyledcomponents/>}/>
                
                
                
                
                

            </div>

        </div>
    )
}
export default Habilidades