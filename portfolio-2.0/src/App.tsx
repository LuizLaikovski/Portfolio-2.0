import Header from "./components/Header"
import SectionFour from "./components/sections/SectionFour";
import SectionOne from "./components/sections/SectionOne"
import SectionTree from "./components/sections/SectionTree";
import SectionTwo from "./components/sections/SectionTwo"
import AOS from "aos";

AOS.init({
  // Configurações globais:
  disable: false, // aceita os seguintes valores: 'phone', 'tablet', 'mobile', booleano, expressão ou função
  startEvent: 'DOMContentLoaded', // nome do evento disparado no documento, no qual o AOS deve ser inicializado
  initClassName: 'aos-init', // classe aplicada após a inicialização
  animatedClassName: 'aos-animate', // classe aplicada durante a animação
  useClassNames: true, // se verdadeiro, adiciona o conteúdo de `data-aos` como classes ao rolar a página
  disableMutationObserver: false, // desativa a detecção automática de mutações (avançado)
  debounceDelay: 50, // atraso (em ms) usado no debounce durante o redimensionamento da janela (avançado)
  throttleDelay: 99, // atraso (em ms) usado no throttle durante a rolagem da página (avançado)


  // Configurações que podem ser sobrescritas individualmente por atributos `data-aos-*`:
  offset: 120, // deslocamento (em px) a partir do ponto original de disparo da animação
  delay: 0, // valores de 0 a 3000, com incremento de 50ms
  duration: 1000, // duração da animação, de 0 a 3000ms, com incremento de 50ms
  easing: 'ease-in-out', // tipo de suavização padrão para as animações AOS
  once: false, // define se a animação deve acontecer apenas uma vez — ao rolar para baixo
  mirror: true, // define se os elementos devem animar novamente ao sair da tela (rolando para cima)
  anchorPlacement: 'top-bottom', // define qual posição do elemento em relação à janela deve disparar a animação
});

function App() {
  return (
    <>
      <div className="">
        <Header />
        <SectionOne />
        <SectionTwo />
        <div 
          className="w-full h-[80dvh]"
          style={{
            background: `linear-gradient(to bottom, var(--bg-color) 0%, var(--bg-color) 55%, var(--text-color))`
          }}
          >
          <SectionTree />
        </div>
        <div className="bg-[var(--text-color)] h-auto">
          <SectionFour />
        </div>
      </div>
    </>
  )
}

export default App
