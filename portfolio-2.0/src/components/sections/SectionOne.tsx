import "./css/sectionOne.css";

const SectionOne = () => {
    return (
        <div className="h-[86dvh] max-sm:h-[120dvh] w-full bg-[var(--bg-color)] flex justify-center items-center">
            <div className="flex justify-center items-center max-sm:flex-col">
                <div className="flex flex-col justify-center items-center gap-4 w-[45dvw] max-sm:w-[90dvw]">
                    <h1 data-aos="fade-right" data-aos-duration="500" className="title-name text-[var(--title-color)]">Luiz Laikovski</h1>
                    <div data-aos="fade-right" data-aos-duration="1000" className="w-[40dvw] border-2 border-black max-sm:w-[80vw]"></div>
                    <p
                    className="text-[17px] max-sm:text-[20px]"
                    data-aos="fade-right"
                    data-aos-duration="1500">Tenho 17 anos e estou no terceiro ano do ensino médio. Sou apaixonado por tecnologia e aprendi, por conta própria, a programar em HTML, CSS, JavaScript, TypeScript, Python, Java e MySQL. Gosto de criar projetos e resolver desafios, sempre buscando aprender mais. Meu objetivo é me tornar um desenvolvedor de destaque e construir uma carreira na área de tecnologia.</p>
                </div>
                <div className="w-[36dvw] max-sm:w-[40dvh] flex justify-center items-center flex-col max-sm:mt-10">
                    <img data-aos="fade-left" data-aos-duration="800" src="./eu.jpg" className="border-4 border-[var(--primary-color)] rounded-[50%] h-[60dvh] hover:scale-105 transition duration-300 max-sm:h-[40dvh] max-sm:w-[40dvh]" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SectionOne