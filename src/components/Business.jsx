import styles from "../styles";
import { c, cpp, github, java } from "../assets";

const Business = () => {
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
     <section id="projetos" className={`relative flex flex-col
     min-h-screen ${styles.paddingY} px-6`}>
      <div className="w-full max-w-[1200px] mx-auto">
        <h1 className="font-poppins font-bold text-gradient2 
        ss:text-[70px] text-[52px]
        ss:leading-[100px] leading-[75px] mb-12">
          Projetos
        </h1>
    <div className="flex justify-center md:items-center flex-wrap gap-38">
        <a 
        href="https://github.com/LeoRossi37"
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className=" group relative w-full max-w-[500px]
        minh-[280px] overflow-hidden rounded-[25px]
        border border-cyan-400/40 bg-[#080b14] p-8
        transition-all duration-300 hover:border-cyan-400/80"
        style={{
              background:
                "radial-gradient(circle 180px at var(--mouse-x) var(--mouse-y), rgba(0, 247, 255, 0.07), transparent 80%), #080b14",
            }}>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4">
                  <img src={github} alt="GitHub" 
                  className="w-12 h-12"/>
                    <h2 className="font-poppins font-bold text-white text-[20px]">
                      GitHub
                    </h2>
                </div>
                <p className="font-poppins font-semibold text-gray-400
                text-[16px] mt-6">
                  Veja todos meus projetos, códigos e estudos no GitHub!
                </p>
              </div>
        
        </a>
         <a 
        href="https://github.com/LeoRossi37"
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className=" group relative w-full max-w-[500px]
        minh-[280px] overflow-hidden rounded-[25px]
        border border-cyan-400/40 bg-[#080b14] p-8
        transition-all duration-300 hover:border-cyan-400/80"
        style={{
              background:
                "radial-gradient(circle 180px at var(--mouse-x) var(--mouse-y), rgba(0, 247, 255, 0.07), transparent 80%), #080b14",
            }}>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4">
                  <img src={c} alt="GitHub" 
                  className="w-12 h-12"/>
                    <h2 className="font-poppins font-bold text-white text-[20px]">
                      Programas em C/C++
                    </h2>
                </div>
                <p className="font-poppins font-semibold text-gray-400
                text-[16px] mt-6">
                  Veja meu aprendizado em C e em C++
                </p>
              </div>
        
        </a>
        <a 
        href="https://github.com/LeoRossi37"
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className=" group relative w-full max-w-[500px]
        minh-[280px] overflow-hidden rounded-[25px]
        border border-cyan-400/40 bg-[#080b14] p-8
        transition-all duration-300 hover:border-cyan-400/80"
        style={{
              background:
                "radial-gradient(circle 180px at var(--mouse-x) var(--mouse-y), rgba(0, 247, 255, 0.07), transparent 80%), #080b14",
            }}>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4">
                  <img src={java} alt="GitHub" 
                  className="w-12 h-12"/>
                    <h2 className="font-poppins font-bold text-white text-[20px]">
                      Programas em Java
                    </h2>
                </div>
                <p className="font-poppins font-semibold text-gray-400
                text-[16px] mt-6">
                  Aprendizado e projetos em Java!
                </p>
              </div>
        
        </a>
        <a 
        href="https://github.com/LeoRossi37"
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className=" group relative w-full max-w-[500px]
        minh-[280px] overflow-hidden rounded-[25px]
        border border-cyan-400/40 bg-[#080b14] p-8
        transition-all duration-300 hover:border-cyan-400/80"
        style={{
              background:
                "radial-gradient(circle 180px at var(--mouse-x) var(--mouse-y), rgba(0, 247, 255, 0.07), transparent 80%), #080b14",
            }}>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4">
                  <img src={cpp} alt="GitHub" 
                  className="w-12 h-12"/>
                    <h2 className="font-poppins font-bold text-white text-[20px]">
                      Programas de Programação Competitiva
                    </h2>
                </div>
                <p className="font-poppins font-semibold text-gray-400
                text-[16px] mt-6">
                  Estudos e algoritmos mais comlplexos em C++
                </p>
              </div>
        
        </a>
        </div>
    </div>
    </section>
  );
};

export default Business;