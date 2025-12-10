import { useEffect } from "react";
import { faGit, faGithub, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/sectionTwo.css";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";

const SectionTwo = () => {
    useEffect(() => {
        const cards = document.querySelectorAll(".card-tech");

        cards.forEach((card) => {
            const el = card as HTMLElement;

            // ângulo pequeno e aleatório entre -25° e 25°
            const angle = Math.floor(Math.random() * 51) - 25;

            // eixo aleatório (X, Y ou Z)
            const axes = ["X", "Y", "Z"];
            const axis = axes[Math.floor(Math.random() * axes.length)];

            // salva no dataset
            el.dataset.rotate = `rotate${axis}(${angle}deg)`;

            // animação no hover
            el.addEventListener("mouseenter", () => {
                el.style.transform = el.dataset.rotate as string;
            });

            el.addEventListener("mouseleave", () => {
                el.style.transform = "rotate(0)";
            });
        });
    }, []);

    return (
        <section id="tech-stacks" className="h-[70dvh] w-full bg-[var(--bg-color)] flex justify-center items-center max-sm:h-[130dvh] max-sm:p-10">
            <div className="flex flex-col justify-center items-center gap-4 w-[45dvw] max-sm:w-[90dvw]">
                <h1 className="text-[var(--title-color)] text-[65px] text-center font-semibold w-[13ch] max-sm:text-[50px]">
                    Tecnologias
                </h1>
                <div className="w-[40dvw] border border-black max-sm:w-[80vw]"></div>
                <div className="flex justify-center items-center mt-4 
                max-[1280px]:grid max-sm:grid-cols-2 max-[1280px]:grid-cols-4 max-[1280px]:w-[80dvw]">
                    <div className="card-tech flex justify-center items-center" data-aos="zoom-in-up"
                        data-aos-duration="200">
                        <FontAwesomeIcon icon={faReact} size="5x" />
                    </div>
                    <div className="card-tech flex justify-center items-center" data-aos="zoom-in-up"
                        data-aos-duration="400">
                        <RiTailwindCssFill className="h-[70px] w-[70px]" />
                    </div>
                    <div className="card-tech flex justify-center items-center" data-aos="zoom-in-up"
                        data-aos-duration="600">
                        <FontAwesomeIcon icon={faJs} size="5x" />
                    </div>
                    <div className="card-tech flex justify-center items-center" data-aos="zoom-in-up"
                        data-aos-duration="800">
                        <BiLogoTypescript className="h-[70px] w-[70px]" />
                    </div>
                    <div className="card-tech flex justify-center items-center" data-aos="zoom-in-up"
                        data-aos-duration="1000">
                        <GrMysql className="h-[70px] w-[70px]" />
                    </div>
                    <div className="card-tech flex justify-center items-center" data-aos="zoom-in-up"
                        data-aos-duration="1200">
                        <FontAwesomeIcon icon={faGit} size="5x" />
                    </div>
                    <div className="card-tech flex justify-center items-center" data-aos="zoom-in-up"
                        data-aos-duration="1400">
                        <FontAwesomeIcon icon={faGithub} size="5x" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;
