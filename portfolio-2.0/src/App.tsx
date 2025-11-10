import Header from "./components/Header"
import SnakeGame from "./components/SnakeGame";
import SectionFour from "./components/sections/SectionFour";
import SectionOne from "./components/sections/SectionOne"
import SectionTree from "./components/sections/SectionTree";
import SectionTwo from "./components/sections/SectionTwo"
import AOS from "aos";
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000
});

function App() {
  return (
    <>
      <div className="">
        <Header />
        <SectionOne />
        <SectionTwo />
        <div 
          className="w-full h-[80dvh] max-sm:h-[125dvh]"
          style={{
            background: `linear-gradient(to bottom, var(--bg-color) 0%, var(--bg-color) 55%, var(--secondary-color))`
          }}
          >
          <SectionTree />
        </div>
        <div className="bg-[var(--secondary-color)] h-auto">
          <SectionFour />
        </div>
        <SnakeGame />
      </div>
    </>
  )
}

export default App
