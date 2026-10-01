
import eu from "../assets/eu.jpeg";
import { c, cpp, css3, html5,java,javaScript,mySql,nodeJs,react,tailwindCss   } from "../assets";

const Stats = () => {
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
    <section id="info" className={`relative flex flex-col
    justify-center min-h-screen  px-6`}>
      <div className="w-full max-w-[1200px] mx-auto">
    <h1 className="font-poppins font-bold
      ss:text-[70px] text-[52px] text-gradient2 
      ss:leading-[100px] leading-[75px] mb-12">
        Sobre mim
      </h1>
      <div className=" flex flex-col lg:flex-row gap-16 items-center"
      >
        <div className="w-full lg:w-auto flex-shrink-0">
      <div className="relative w-full max-w-[460px] p-2
      rounded-[32px] border border-cyan-400/60
      bg-black/30 shadow[0_0_25px_rgba(0,255,255,0.15)] mx-auto">
        <div className="relative overflow-hidden rounded-[25px]">
          <img src={eu} alt="Leonardo Rossi" 
          className="w-full h-auto object-cover"/>
            <div className=" hidden sm:block absolute bottom-4 left-4 right-4 rounded-[20px]
            bg-[#1713223]/95 border border-white/10 px-5 py-4 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4">
                <div>  
                <h2 className="font-poppins font-bold
                text-black text-[24px]">
                Leonardo Rossi
                </h2>
                <p className="font-poppins text-blue-700 text-[14px]">
                  UNESP-Bauru
                </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime-500">
                  </span>
                  <span
                    className="font-poppins font-semibold
                    text-lime-500 text-[13px]"
                  >
                    Disponível
                  </span>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div> 
      <div className="flex-1 font-poppins text-white"> 
      <h2 className="text-[20px] font-bold mb-10">
        Olá, eu sou Leonardo, estudo Ciência da Computação e fiz ese site
        para mostrar meus projetos e ter experiência em ReactJS!
      </h2>
      <p className="text-[16px] font-bold mb-6">
      Participei durante um ano de um grupo de 
      <span className="text-[16px] font-bold text-gradient2"> programação competitiva em C++</span>{" "}e 
      realizei diversos exercícios de competições, apesar de não ter particpado
      de nenhuma oficialmente. Estou aprendendo {" "}
      <span className="text-[16px] font-bold text-gradient2">
      Java e MySQL, 
      </span> {" "}porém já estou com uma base
      sólida em <span 
      className="text-[16px] font-bold text-gradient2">ReactJS, HTML, TailwindCSS, JavaScript, C e C++
      </span>
      </p>
      <p className="text-[16px] font-bold mb-6">
        Além disso, atualmente estou participando de uma empresa júnior de computação da UNESP
        a 
        {" "}<a href="https://www.codetechjr.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[16px] font-bold text-gradient3 hover:underline">Code Tech JR</a>{" "}
        como membro da área comercial, ou seja, sou responsável pelo contato com nossos
        clientes e pelas propostas comerciais e apresentações
      </p>
      <div className="relative w-full max-w-auto p-2
      rounded-[32px] border border-cyan-400/60
      bg-black/30 shadow[0_0_25px_rgba(0,255,255,0.15)]"
       onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              background:
                "radial-gradient(circle 70px at var(--mouse-x) var(--mouse-y), rgba(49, 52, 52, 0.56), transparent 80%), #080b14",
            }}>
        <div className=" flex flex-wrap justify-center gap-8 relative overflow-hidden rounded-[25px]">
          <img src={java} alt="" 
          className="w-8 h-8 "/>
          <img src={mySql} alt="" 
          className="w-8 h-8 "/>
          <img src={c} alt="" 
          className="w-8 h-8 "/>
          <img src={cpp} alt="" 
          className="w-8 h-8 "/>
          <img src={html5} alt="" 
          className="w-8 h-8 "/>
          <img src={css3} alt="" 
          className="w-8 h-8 "/>
          <img src={react} alt="" 
          className="w-8 h-8 "/>
          <img src={tailwindCss} alt="" 
          className="w-8 h-8 "/>
          <img src={javaScript} alt="" 
          className="w-8 h-8 "/>
          <img src={nodeJs} alt="" 
          className="w-8 h-8 "/>
        </div>
      </div>
    </div>
      
    </div>
            <p className=" flex justify-center items-center max-w-[1200px] font-poppins font-bold text-about-me
    text-left text-[16px] mt-8 px-5">
      Aluno de Ciência da Computação @ UNESP-Bauru
    </p>
    </div>
    
   
  </section>
  );
};

export default Stats;