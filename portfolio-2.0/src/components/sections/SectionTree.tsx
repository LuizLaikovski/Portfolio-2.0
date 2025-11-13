import "./css/sectionTree.css";

const SectionTree = () => {
    const skills = [
        "Comunicação",
        "Trabalho em equipe",
        "Empatia",
        "Flexibilidade",
        "Liderança",
        "Resolução de problemas",
        "Criatividade",
    ];

    return (
        <section id="softSkills" className="h-[75dvh] flex justify-center items-center max-sm:h-[120dvh]">
            <div className="flex justify-center items-center h-[100%] w-[100dvw] max-sm:flex-col p-5">
                <h1 className="text-[var(--title-color)] text-[85px] text-center font-semibold" data-aos="fade-right">
                Soft Skills
                </h1>

                <div className="h-[80%] border-2 m-10 max-sm:hidden" data-aos="zoom-in-up"></div>
                <div className="min-sm:hidden w-[80dvw] border-[var(--title-color)] border-2 m-10" data-aos="zoom-in-up"></div>

                <div className="flex flex-wrap justify-center gap-6 max-w-[800px] max-sm:grid max-sm:grid-cols-2">
                    {skills.map((skill, index) => (
                        <div key={index} className="cardSoft">
                            <h1 className="max-sm:text-[18px]">{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionTree;
