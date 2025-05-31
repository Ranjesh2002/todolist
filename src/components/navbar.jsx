import { BiNotepad } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-900 text-white py-2.5 w-full h-15">
      <div className="logo flex items-center gap-0.1 ml-12">
        <BiNotepad size={24} className="mx-1" />
        <span className="font-bold text-xl mx-2">Todo</span>
      </div>

      <ul className="flex gap-10 mx-9 pr-11">
        <li className="cursor-pointer hover:font-bold trasition-all duration-50">
          Home
        </li>
        <li className="cursor-pointer hover:font-bold trasition-all duration-50">
          About
        </li>
        <li className="cursor-pointer hover:font-bold trasition-all duration-50">
          Finished
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
