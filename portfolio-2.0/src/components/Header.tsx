import { faFile, faFilePdf, faUser } from "@fortawesome/free-regular-svg-icons";
import { faMicrochip, faUsers } from "@fortawesome/free-solid-svg-icons";
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
        <header id="about" className="w-full h-[14dvh] flex items-center justify-center bg-[var(--secondary-color)] shadow-[var(--accent-color)] relative z-10 top-0">
            <div>
                <a href="https://github.com/luizlaikovski" className="text-2xl text-[var(--bg-color)]"><h1>Luiz Laikovski | Dev</h1></a>
            </div>
            <div className="ml-[30dvw]">
                <ul className="flex text-[var(--bg-color)]">
                    <a href="#about"><li className="header-skills p-3 text-xl cursor-pointer"><FontAwesomeIcon icon={faUser} />   About Me</li></a>
                    <a href="#tech-stacks"><li className="header-skills p-3 text-xl cursor-pointer"><FontAwesomeIcon icon={faMicrochip} />   Tech Stack</li></a>
                    <a href="#softSkills"><li className="header-skills p-3 text-xl cursor-pointer"><FontAwesomeIcon icon={faUsers} />   Soft Skill's</li></a>
                    <li className="header-skills p-3 text-xl cursor-pointer"><FontAwesomeIcon icon={faFile} />   Projects</li>
                    <li className="header-skills p-3 text-xl cursor-pointer"><a href="CV - Luiz Laikovski - 2025.pdf" download="CV - Luiz Laikovski - 2025.pdf"><FontAwesomeIcon icon={faFilePdf} />    CV</a></li>
                </ul>

                <button onClick={toggleModal} className="button-modal hidden">Open</button>

                {modal && (
                    <>
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[1000]" onClick={toggleModal}>
                            <div className="modal-content">
                                <div className="overlay"></div>
                                <div className="modal-content">
                                    <h2>Modal Title</h2>
                                    <p>This is a modal window.</p>
                                    <button className="close-modal" onClick={toggleModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;