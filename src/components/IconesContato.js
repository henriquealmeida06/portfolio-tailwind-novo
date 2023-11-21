
import { MdOutlineEmail } from "react-icons/md";

function IconesContato({ icone, categoria, valor, onClick }) {
  return (
    <div onClick={onClick} className="flex flex-col justify-center items-center font-roboto1 transition-transform duration-200 hover:scale-125 cursor-pointer">
      <span className="text-roxoBorda bg-cinzaChumbo p-4 rounded-full text-px40 mb-3">{icone}</span>

      <p className="text-xl font-bold">{categoria}</p>
      <p className="text-gray-500 font-medium">{valor}</p>
    </div>
  );
}
export default IconesContato;
