import { faFile, faFilePdf, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faMicrochip, faPhone, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./css/header.css"

const Header = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        if (modal) {
            setModal(false);
        } else {
            setModal(true);
        }
    }


    return (
        <header id="about" className="w-full h-[14dvh] flex items-center justify-center bg-[var(--secondary-color)] shadow-[var(--accent-color)] relative z-10 p-5 top-0">
            <div>
                <a href="https://github.com/luizlaikovski" className="text-2xl text-[var(--bg-color)] max-sm:text-[20px]"><h1>Luiz Laikovski | Dev</h1></a>
            </div>
            <div className="ml-[30dvw]">
                <ul className="flex text-[var(--bg-color)] max-sm:hidden">
                    <a href="#about"><li className="header-skills p-3 text-xl cursor-pointer"><FontAwesomeIcon icon={faUser} />   Sobre Mim</li></a>
                    <a href="#tech-stacks"><li className="header-skills p-3 text-xl cursor-pointer"><FontAwesomeIcon icon={faMicrochip} />   Tecnologias</li></a>
                    <a href="#softSkills"><li className="header-skills p-3 text-xl cursor-pointer"><FontAwesomeIcon icon={faUsers} />   Soft Skill's</li></a>
                    <a href="#projects"><li className="header-skills p-3 text-xl cursor-pointer"><FontAwesomeIcon icon={faFile} />   Projetos</li></a>
                    <a href="#contact"><li className="header-skills p-3 text-xl cursor-pointer"><FontAwesomeIcon icon={faPhone} />   Contato</li></a>
                    <li className="header-skills p-3 text-xl cursor-pointer"><a href="CV - Luiz Laikovski - 2025.pdf" download="CV - Luiz Laikovski - 2025.pdf"><FontAwesomeIcon icon={faFilePdf} />    CV</a></li>
                </ul>

                <button onClick={toggleModal} className="button-modal text-[var(--bg-color)] min-sm:hidden"><FontAwesomeIcon size="2x" icon={faBars} /></button>

                {modal && (
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-start z-[1000]"
                        onClick={toggleModal}
                    >
                        <div
                            className="modal-content animate-slideDown bg-[var(--bg-color)] text-[var(--text-color)] rounded-b-2xl shadow-lg p-6 w-[100dvw] h-[50dvh] max-w-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-xl font-semibold mb-4">Menu</h2>
                            <ul className="space-y-3 text-lg">
                                <li data-aos="fade-right" data-aos-duration="400"><a href="#about" onClick={toggleModal}><FontAwesomeIcon icon={faUser} /> Sobre Mim</a></li>
                                <li data-aos="fade-right" data-aos-duration="800"><a href="#tech-stacks" onClick={toggleModal}><FontAwesomeIcon icon={faMicrochip} /> Tecnologias</a></li>
                                <li data-aos="fade-right" data-aos-duration="1200"><a href="#softSkills" onClick={toggleModal}><FontAwesomeIcon icon={faUsers} /> Soft Skill’s</a></li>
                                <li data-aos="fade-right" data-aos-duration="1400"><a href="#" onClick={toggleModal}><FontAwesomeIcon icon={faFile} /> Projetos</a></li>
                                <li data-aos="fade-right" data-aos-duration="1600"><a href="CV - Luiz Laikovski - 2025.pdf" download="CV - Luiz Laikovski - 2025.pdf" onClick={toggleModal}>
                                    <FontAwesomeIcon icon={faFilePdf} /> CV
                                </a></li>
                            </ul>
                            <button className="mt-6 bg-[var(--accent-color)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition" onClick={toggleModal}>
                                Fechar
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </header>
    );
};

export default Header;