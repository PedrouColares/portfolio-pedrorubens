import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="sticky top-0 pt-6 z-1 bg-white">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4 gap-5 text-xl font-sans font-normal">
          <NavLink to={'/'} className="text-gray-600 hover:text-black mx-1"><b>Início</b></NavLink>
          <p className="text-gray-500 mx-0">&middot;</p>
          <NavLink to={'/projetos'} className="text-gray-600 hover:text-black mx-1"><b>Projetos</b></NavLink>
        </div>
      </div>
        <hr className="w-full mt-5"/>
    </nav>
  );
}