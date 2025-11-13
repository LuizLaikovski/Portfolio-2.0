import { faGithub, faWhatsapp, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SnakeGame from "./SnakeGame";

const Footer = () => {
    return (
        <>
            <footer id="contact" className="w-full h-[86dvh] flex-col flex items-center justify-center max-sm:h-[75dvh]">
                <div className="flex justify-center items-center w-[100%]">
                    <div className="p-10 mr-[25%] max-sm:mr-0">
                        <div className="w-[30dvw]  flex mt-6 mb-6 max-sm:w-[80dvw]">
                            <FontAwesomeIcon icon={faGithub} className="text-4xl"/>
                            <a className="text-2xl cursor-pointer pl-2.5" href="https://github.com/luizlaikovski">GitHub</a>
                        </div>
                        <div className="w-[30dvw] flex mt-6 mb-6 max-sm:w-[80dvw]">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-4xl"/>
                            <a className="text-2xl cursor-pointer pl-2.5" href='https://wa.me/5547988729248'>Whatsapp</a>
                        </div>
                        <div className="w-[30dvw] flex mt-6 mb-6 max-sm:w-[80dvw]">
                            <FontAwesomeIcon icon={faGoogle} className="text-4xl"/>
                            <a className="text-2xl max-sm:text-[20px] cursor-pointer pl-2.5" href="mailto:luizlaikovski@gmail.com">E-Mail: luizlaikovski@gmail.com</a><br></br>
                        </div>
                        <div className="w-[30dvw] flex mt-6 mb-6 max-sm:w-[80dvw]">
                            <FontAwesomeIcon icon={faInstagram} className="text-4xl"/>
                            <a className="text-2xl cursor-pointer pl-2.5" href="https://www.instagram.com/_luizlaikovski">instagram: @_luizlaikovski</a>
                        </div>
                        <div className="w-[30dvw] flex max-sm:w-[80dvw] "> 
                            <FontAwesomeIcon icon={faLocationDot} className="text-4xl" />
                            <h2 className="text-2xl cursor-pointer pl-2.5">Blumenau, Santa Catarina - Brasil</h2>
                        </div>
                    </div>   
                    <SnakeGame />
                </div>
                <div className="flex-col text-center mt-10">
                    <h4 className="TitleD">Todos os direitos reservados</h4>
                    <h4 className="TitleD">&copy; Desenvolvido por Luiz Laikovski | Dev</h4>
                </div>
            </footer>
        </>
    );
};

export default Footer;