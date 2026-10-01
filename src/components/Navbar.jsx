import { useState } from "react";
import {close, menu} from '../assets'
import {navLinks} from '../constansts'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
    const handleMouseMove =(e)=>{
    const card= e.currentTarget;
    const rect= card.getBoundingClientRect();
    const x= e.clientX - rect.left;
    const y= e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    }
    const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--mouse-x", "-500px");
    card.style.setProperty("--mouse-y", "-500px");
    };
  return (
    <nav className=" fixed top-5  left-1/2 -translate-x-1/2 z-50
    px-6 py-3 rounded-full bg-black/50 backdrop-blur-sm"
    onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              background:
                "radial-gradient(circle 70px at var(--mouse-x) var(--mouse-y), rgba(76, 86, 86, 0.56), transparent 80%), #080b14",
            }}>
      <ul className="list-none sm:flex
      hidden justify-end items-center flex-1"
      >
        {navLinks.map((nav,index)=>(
          <li
          key={nav.id}
          className={`font-poppins font-normal 
            cursor-pointer text-[16px] ${index==navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white`}

          >
            <a href={`#${nav.id}`}
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

        <div className="sm:hidden flex items-center">
          <img src={toggle ? close : menu} alt="menu" 
          className="w-[28px] h-[28px] object-contain"
          onClick={()=> setToggle((prev)=> (!prev))}/>
          <div className={`${toggle ? 'flex' : 'hidden'}
          p-6 bg-black-gradient absolute top-14 -right-5
          min-w-[110px] rounded-x1`}>
            <ul className="list-none flex
             flex-col justify-end items-center flex-1 gap-4">
              {navLinks.map((nav,index)=>(
                <li
                key={nav.id}
                className={`font-poppins font-normal 
                  cursor-pointer text-[16px] ${index==navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

     </nav>
  );
};

export default Navbar;