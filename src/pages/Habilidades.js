import styles from './Habilidades.module.css'
import {FaHtml5, FaCss3Alt, FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io5'
import {SiStyledcomponents} from 'react-icons/si'
import IconesHabilidades from '../components/IconesHabilidades'

function Habilidades(){
    return(
        <div className={styles.containerHabilidades}>
            <h1>Habilidades</h1>
            <div className={styles.quadroHabilidades}>
            <IconesHabilidades habilidade="HTML5" icone={<FaHtml5/>}/>
            <IconesHabilidades habilidade="CSS3" icone={<FaCss3Alt/>}/>
            <IconesHabilidades habilidade="JavaScript" icone={<IoLogoJavascript/>}/>
            <IconesHabilidades habilidade="React" icone={<FaReact/>}/>
            <IconesHabilidades habilidade="CSS-in-JS" icone={<SiStyledcomponents/>}/>
                
                
                
                
                

            </div>

        </div>
    )
}
export default Habilidades