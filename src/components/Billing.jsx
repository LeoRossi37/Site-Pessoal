import { instagram, linkedin, email2 } from "../assets";
import { useState } from "react";

const Billing = () => {
  const[nome,setNome] = useState("");
  const[email,setEmail] = useState("");
  const[mensagem,setMensagem] = useState("");

  const enviaMsg= ()=>{
    const assunto=`Contato pelo portifólio - ${nome}`;
    const corpo=`Nome:${nome}
    E-mail:${email}
    Mensagem:${mensagem}`;
    window.location.href=`malito:rossileonardo81@gmail.com?subject=${encodeURIComponent(assunto)}
    &body=${encodeURIComponent(corpo)}`;
  };

  const [posicao,setPosicao] = useState({x:0, y:0});
  const [posicao1,setPosicao1] = useState({x:0, y:0});
  const [posicao2,setPosicao2] = useState({x:0, y:0});
  const handleMouseMove= (e, setPosicao) =>{
    const rect=e.currentTarget.getBoundingClientRect();
    const mouseX= e.clientX - rect.left;
    const mouseY= e.clientY - rect.top;
    const centroX= rect.width /2;
    const centroY= rect.height/2;

    const x=(mouseX -centroX) *0.5;
    const y=(mouseY -centroY) * 0.5;

    setPosicao({
      x: Math.max(-10,Math.min(10,x)),
      y: Math.max(-10,Math.min(10,y)),
    });

  };

  const handleMouseMove1= (e, setPosicao1) =>{
    const rect=e.currentTarget.getBoundingClientRect();
    const mouseX= e.clientX - rect.left;
    const mouseY= e.clientY - rect.top;
    const centroX= rect.width /2;
    const centroY= rect.height/2;

    const x=(mouseX -centroX) *0.5;
    const y=(mouseY -centroY) * 0.5;

    setPosicao1({
      x: Math.max(-10,Math.min(10,x)),
      y: Math.max(-10,Math.min(10,y)),
    });

  };
  const handleMouseMove2= (e, setPosicao2) =>{
    const rect=e.currentTarget.getBoundingClientRect();
    const mouseX= e.clientX - rect.left;
    const mouseY= e.clientY - rect.top;
    const centroX= rect.width /2;
    const centroY= rect.height/2;

    const x=(mouseX -centroX) *0.5;
    const y=(mouseY -centroY) * 0.5;

    setPosicao2({
      x: Math.max(-10,Math.min(10,x)),
      y: Math.max(-10,Math.min(10,y)),
    });

  };

  return (
    <section id="contato"
    className=" relative flex flex-col items-center justify-center
     pt-20 ">
    <div className=" flex flex-col md:flex-col  lg:flex-row min-[1024px]:flex-row gap-8 min-[1024px]:gap-28
        items-center min-[1024px]:items-start w-full max-w-[1151px]
        h-auto  mx-auto px-4 sm:px-6">
      <div className=" flex flex-col w-full min-[1024px]:w-auto 
      items-center min-[1024px]:items-start ">
        <h1 className="font-poppins font-bold
      ss:text-[40px] text-[28px] text-gradient2 
      ss:leading-[80px] leading-[55px]  mb-10">Tire sua dúvida!
      </h1>
      <a href="https://www.linkedin.com/in/leonardo-rossi-7478982b3/?isSelfProfile=true"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 mb-6"
      >
        <img src={linkedin} alt="LinkedinSVG" 
      className="w-8 h-8 object-contain"/>
      <span className="font-poppins text-white text-[18px] hover:text-cyan-400">
        Linkedin
      </span>
      </a>
      
      <a href="https://www.instagram.com/leonardo.ross1/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 mb-6"
      >
        <img src={instagram} alt="LinkedinSVG" 
      className="w-8 h-8 object-contain"/>
      <span className="font-poppins text-white text-[18px] hover:text-cyan-400">
        Instagram
      </span>
      </a>
      <a href="https://www.linkedin.com/in/leonardo-rossi-7478982b3/?isSelfProfile=true"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 mb-6"
      >
        <img src={email2} alt="LinkedinSVG" 
      className="w-8 h-8 object-contain"/>
      <span className="font-poppins text-white text-[18px] hover:text-cyan-400">
        Email
      </span>
      </a>
      </div>
      <div className=" flex flex-col group relative w-full max-w-[400px]
        minh-[280px] overflow-hidden rounded-[25px]
        border border-cyan-400/40 bg-[#080b14] p-6 sm:p-10
        transition-all duration-300 hover:border-cyan-400/80 min-[1024px]:ml-auto">
          <p className="font-poppins font-semibold text-[16px] 
          text-gradient">
          Mande sua mensagem!</p>
          <input type="text" 
        placeholder="Digite seu nome!"
        value={nome}
        onChange={(e)=>setNome(e.target.value)}
        className="w-full h-[50px] px-4 rounded-lg bg-[#080b14]
        border border-gray-600 text-white placeholder-gray-500
        outiline-none focus:border-cyan-400 my-3 resize-none"/>
        <input type="text" 
        placeholder="Digite seu email!"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="w-full h-[50px] px-4 rounded-lg bg-[#080b14]
        border border-gray-600 text-white placeholder-gray-500
        outiline-none focus:border-cyan-400 my-3 resize-none"/>
        <textarea placeholder="Digite sua mensagem aqui!"
        value={mensagem}
        onChange={(e)=>setMensagem(e.target.value)}
        className="w-full h-[180px] px-4 py-3 rounded px-4 rounded-lg 
        bg-[#080b14] border border-gray-600 text-white 
        placeholder-gray-500 outiline-none focus:border-cyan-400p 
        resize-none my-3">

        </textarea>
        <button
        type="button"
        onClick={enviaMsg}
        className="font-poppins text-[15px] border
        border-gray-600 rounded
        rounded-lg px-4 text-white "> Enviar mensagem</button>
        </div>
    </div>
    <footer className="w-full bg-[#111827] mt-20">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-10">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="font-poppins font-bold text-white text-[20px]">
            Leonardo Rossi
          </h2>
          <div className="flex gap-10">
        <a
          href="https://github.com/LeoRossi37"
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={(e) => handleMouseMove(e,setPosicao)}
          onMouseLeave={()=>setPosicao({x:0, y:0})}
          className="font-poppins text-gray-400 hover:text-cyan-400
          transition-transform duration-100"
          style={{
            transform: `translate(${posicao.x}px,${posicao.y}px)`
          }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/leonardo-rossi-7478982b3/"
          target="_blank"
          rel="noopener noreferrer"
           onMouseMove={(e) => handleMouseMove1(e,setPosicao1)}
          onMouseLeave={()=>setPosicao1({x:0, y:0})}
          className="font-poppins text-gray-400 hover:text-cyan-400
          transition-transform duration-100"
          style={{
            transform: `translate(${posicao1.x}px,${posicao1.y}px)`
          }}
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/leonardo.ross1/"
          target="_blank"
          rel="noopener noreferrer"
           onMouseMove={(e) => handleMouseMove2(e,setPosicao2)}
          onMouseLeave={()=>setPosicao2({x:0, y:0})}
          className="font-poppins text-gray-400 hover:text-cyan-400
          transition-transform duration-100"
          style={{
            transform: `translate(${posicao2.x}px,${posicao2.y}px)`
          }}
        >
          Instagram
        </a>
      </div>
          <p className="font-poppins text-gray-500 text-[14px]">
        © 2026 Leonardo Rossi. Todos os direitos reservados.
      </p>
        </div>

      </div>

    </footer>
    </section>
  );
};

export default Billing