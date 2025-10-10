import Header from "./components/Header"
import SectionOne from "./components/sections/SectionOne"
import SectionTwo from "./components/sections/SectionTwo"

function App() {
  return (
    <>
      <div className="">
        <Header />
        <SectionOne />
        <div className="bg-gradient-to-b from-[var(--bg-color)] to-[var(--text-color)] h-auto w-full">
          <SectionTwo />
        </div>
      </div>
    </>
  )
}

export default App
