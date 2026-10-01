import styles from "../styles";
import background from "../assets/background2.gif";

const Hero = () =>  {
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
  return(
  
    <section id="hero" className={`relative flex flex-col items-center
    justify-center min-h-screen pt-20 ${styles.paddingY}`}>
      <img src={background} alt="" 
      className="absolute inset-0 z-0 w-1/200 h-1/200
      object-cover"/>
        <div className={`relative z-10 flex flex-col items-center justify-center
          text-center px-6`}>
          <div className="mt-15 flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold 
            ss:text-[72px] text-[52px] text-white ss:leading-[100px]
            leading-[75px]">
              Olá, eu sou {" "}
              <span className="text-gradient">Leonardo</span> 
              ,
              <br className="sm:block
              hidden"/> {" "}
              Seja bem vindo ao meu portifólio!
            </h1>

          </div>
        </div>
        
        <a href="#info"
        className="relative z-10 mt-6 font-poppins font-semibold text-white
        px-6 py-3 rounded-full bg-black/50 backdrop-blur-sm"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
              background:
                "radial-gradient(circle 100px at var(--mouse-x) var(--mouse-y), rgba(76, 86, 86, 0.56), transparent 80%), #080b14",
            }}>
          Veja mais
        </a>
      </section>
  );
}


export default Hero;