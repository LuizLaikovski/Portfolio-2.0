import { useEffect } from "react";
import { faGit, faGithub, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/sectionTwo.css";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

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
        <section id="tech-stacks" className="h-[70dvh] w-full bg-[var(--bg-color)] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4 w-[45dvw]">
                <h1 className="text-[var(--title-color)] text-[65px] text-center font-semibold w-[13ch]">
                Tech Stacks
                </h1>
                <div className="w-[40dvw] border border-black"></div>
                <div className="flex justify-center items-center mt-4">
                    <div className="card-tech" data-aos="zoom-in">
                        <FontAwesomeIcon icon={faReact} size="5x" />
                    </div>
                    <div className="card-tech" data-aos="zoom-in">
                        <RiTailwindCssFill className="h-[70px] w-[70px]" />
                    </div>
                    <div className="card-tech" data-aos="zoom-in">
                        <FontAwesomeIcon icon={faJs} size="5x" />
                    </div>
                    <div className="card-tech" data-aos="zoom-in">
                        <svg className="h-[70px] w-[70px] bi bi-typescript" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm-1.139 7.488q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518M7 7.596v1.113h1.3V14.5h1.221V8.709h1.289V7.596z"/>
                        </svg>
                    </div>
                    <div className="card-tech" data-aos="zoom-in">
                        <GrMysql className="h-[70px] w-[70px]" />
                    </div>
                    <div className="card-tech" data-aos="zoom-in">
                        <FontAwesomeIcon icon={faGit} size="5x" />
                    </div>
                    <div className="card-tech" data-aos="zoom-in">
                        <FontAwesomeIcon icon={faGithub} size="5x" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;
