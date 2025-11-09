import { useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJs, FaReact } from "react-icons/fa";
import { SiMysql, SiSpring } from "react-icons/si";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import totus from "../imgs-projects/totus.png";
import clickready from "../imgs-projects/clickready.png";
import app from "../imgs-projects/acolitos.png";

const SectionFour = () => {
    const projects = [
        {
            title: "Totus Tuus",
            desc: "Este é um site de um grupo de jovens católico, e tem como objetivo apresentar o grupo aos novos integrantes.",
            link: "https://totustuussjo.vercel.app/",
            img: totus,
            icons: [<FaReact size="40" key="r" />, <BiLogoTypescript size="40" key="t" />],
        },
        {
            title: "ClickRead'y",
            desc: "Esta é uma biblioteca online para uso didático, e foi o trabalho apresentado no final do curso de Desenvolvimento de Sistemas do Cedup HH.",
            link: "https://github.com/LuizLaikovski/ProjetoConclusaoCedup",
            img: clickready,
            icons: [
                <FaReact size="40" key="r" />,
                <BiLogoTypescript size="40" key="t" />,
                <SiSpring size="40" key="s" />,
            ],
        },
        {
            title: "Controle de Acólitos",
            desc: "Esta aplicação foi criada para facilitar o acesso às informações e dados específicos dos acólitos. Foi usado JS na API e TS com React no front.",
            link: "https://acolitos-sjo.vercel.app",
            img: app,
            icons: [<FaJs size="40" key="j" />, <FaReact size="40" key="r" />, <BiLogoTypescript size="40" key="t" />, <SiMysql size="40" key="m" />],
        },
    ];

    const [current, setCurrent] = useState(0);

    const nextProject = () => setCurrent((prev) => (prev + 1) % projects.length);
    const prevProject = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <section className="min-h-[100dvh] flex flex-col justify-center items-center px-4 py-12">
            <h1
                className="text-[var(--bg-color)] text-5xl md:text-6xl lg:text-7xl font-bold mt-10 text-center"
                data-aos="fade-up"
            >
                Projects
            </h1>
            <div className="w-[60dvw] max-w-[600px] bg-[var(--bg-color)] h-0.5 my-5" data-aos="flip-up"></div>

            <div className="relative w-full max-w-[1100px] overflow-hidden">
                {/* Botão esquerda */}
                <button
                    onClick={prevProject}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-[var(--bg-color)] text-[var(--text-color)] p-3 rounded-full hover:scale-110 transition z-10 max-sm:p-2"
                >
                    <FaArrowLeft size={22} />
                </button>

                {/* Slides */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-full flex justify-center items-center"
                        >
                            <div
                                className="flex flex-col lg:flex-row justify-center items-center bg-[#b8a878] rounded-3xl p-6 lg:p-10 w-[90%] md:w-[80%] lg:w-[70dvw] text-center shadow-lg"
                                data-aos="zoom-out-up"
                            >
                                {/* Texto */}
                                <div className="flex flex-col justify-center items-center w-full lg:w-[50%] bg-[var(--bg-color)] border-2 border-[var(--title-color)] rounded-3xl p-6 mb-6 lg:mb-0">
                                    <h2 className="text-3xl md:text-4xl mb-3 font-semibold">{project.title}</h2>
                                    <p className="text-base md:text-lg text-justify mb-5 leading-relaxed">
                                        {project.desc}
                                    </p>
                                    <div className="flex gap-3 justify-center flex-wrap">{project.icons}</div>
                                </div>

                                {/* Linha divisória */}
                                <div className="hidden lg:block h-[30dvh] bg-[var(--bg-color)] w-0.5 mx-[3dvw]"></div>

                                {/* Imagem */}
                                <div className="flex justify-center w-full lg:w-[40%]">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="h-[25dvh] md:h-[30dvh] lg:h-[35dvh] rounded-2xl transition hover:scale-105 hover:shadow-2xl"
                                    />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Botão direita */}
                <button
                    onClick={nextProject}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-[var(--bg-color)] text-[var(--text-color)] p-3 rounded-full hover:scale-110 transition z-10 max-sm:p-2"
                >
                    <FaArrowRight size={22} />
                </button>
            </div>

            {/* Indicadores */}
            <div className="flex gap-2 mt-6">
                {projects.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition ${
                            i === current ? "bg-[var(--bg-color)] scale-125" : "bg-gray-400"
                        }`}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default SectionFour;
