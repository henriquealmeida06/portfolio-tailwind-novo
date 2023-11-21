import {FaReact} from 'react-icons/fa'

function IconesHabilidades({habilidade, icone}){
    return(
        <div className="p-5 flex flex-col justify-center items-center sd:w-vh18 sd:h-vh19 mc:w-24 mc:h-24 bg-cinzaChumbo rounded-tl-px40 border-b-px3 border-b-solid border-b-roxoBorda border-r-px3 border-r-solid border-r-roxoBorda cursor-pointer transition-transform duration-200 transform hover:scale-125">
            <p className="font-roboto1 text-base text-roxoBorda sm:mb-2 mc:mb-0  text-center">{habilidade}</p>
            <span className='text-4xl text-roxoBorda'>{icone}</span>


        </div>
    )
}
export default IconesHabilidades