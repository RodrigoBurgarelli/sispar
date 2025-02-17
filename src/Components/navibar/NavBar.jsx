import Historico from "../../assets/Header/Botão - Histórico.png";
import Home from "../../assets/Header/botão - Home.png";
import Pesquisa from "../../assets/Header/Botão - Pesquisa.png";
import Reembolso from "../../assets/Header/Botão - Reembolso.png";
import Sair from "../../assets/Header/Botão - Sair.png";
import Perfil from "../../assets/Header/image.png";
import Fechar from "../../assets/Header/imagem-fechar-header.png";
import styles from "./NavBar.module.scss"
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate()



    return (
        <nav className={styles.navBarEstilos}>
            <button>
                <img src={Fechar} alt="Botão abrir e fechar" />
            </button>
            <section>
                <img src={Perfil} alt="imagem de perfil" />
                <div className={styles.boxButton}>
                    <button onClick={()=>{navigate("/reembolso")}}>
                        <img src={Home} alt="botão home" />
                    </button>
                    <button onClick={()=>{navigate("/solicitacao")}}>
                        <img src={Reembolso} alt="botão de reembolso" />
                    </button>
                    <button onClick={()=>{navigate("/reembolso")}}>
                        <img src={Pesquisa} alt="botão de pesquisa" />
                    </button>
                    <button onClick={()=>{navigate("/solicitacao")}}>
                        <img src={Historico} alt="botão histórico" />
                    </button>
                </div>
            </section>
            <button onClick={()=>{navigate("/")} }className={styles.buttonSair}>
                <img src={Sair} alt="imagem sair" />
            </button>
        </nav>

    );
}