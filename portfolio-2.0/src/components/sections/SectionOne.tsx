import "./css/sectionOne.css";

const SectionOne = () => {
    return (
        <div className="h-[86dvh] w-full bg-[var(--bg-color)] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4 w-[45dvw]">
                <h1 className="title-name text-[var(--title-color)]">Luiz Laikovski</h1>
                <div className="w-[40dvw] border-2 border-black"></div>
                <p className="text-[17px]">Tenho 17 anos e estou no terceiro ano do ensino médio. Sou apaixonado por tecnologia e aprendi, por conta própria, a programar em HTML, CSS, JavaScript, TypeScript, Python, Java e MySQL. Gosto de criar projetos e resolver desafios, sempre buscando aprender mais. Meu objetivo é me tornar um desenvolvedor de destaque e construir uma carreira na área de tecnologia.</p>
            </div>
            <div className="w-[45dvw] flex justify-center items-center flex-col ">
                <img data-aos="fade-up" src="./eu.jpg" className="border-4 border-[var(--primary-color)] rounded-[50%] h-[60dvh] hover:scale-105 transition-transform duration-300" alt="" />
            </div>
        </div>
    )
}

export default SectionOne