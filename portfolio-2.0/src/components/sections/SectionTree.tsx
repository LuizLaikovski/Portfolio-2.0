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
        <section id="softSkills" className="h-[75dvh] flex justify-center items-center">
            <div className="flex justify-center items-center h-[100%] w-[100dvw]">
                <h1 className="text-[var(--title-color)] text-[85px] text-center font-semibold">
                Soft Skills
                </h1>

                <div className="h-[80%] border-2 m-10"></div>

                <div className="flex flex-wrap justify-center gap-6 max-w-[800px]">
                    {skills.map((skill, index) => (
                        <div key={index} className="cardSoft">
                        <h1>{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionTree;
