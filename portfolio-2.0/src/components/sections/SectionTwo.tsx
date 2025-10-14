import { useEffect } from "react";
import { faCss, faGit, faGithub, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/sectionTwo.css";

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
                <h1 className="text-[var(--title-color)] text-[65px] font-semibold">
                Tech Stacks
                </h1>
                <div className="w-[40dvw] border border-black"></div>
                <div className="flex justify-center items-center mt-4">
                    <div className="card-tech" data-aos="zoom-in">
                        <FontAwesomeIcon icon={faHtml5} size="5x" />
                    </div>
                    <div className="card-tech" data-aos="zoom-in">
                        <FontAwesomeIcon icon={faCss} size="5x" />
                    </div>
                    <div className="card-tech" data-aos="zoom-in">
                        <FontAwesomeIcon icon={faJs} size="5x" />
                    </div>
                    <div className="card-tech" data-aos="zoom-in">
                        <FontAwesomeIcon icon={faJs} size="5x" />
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
