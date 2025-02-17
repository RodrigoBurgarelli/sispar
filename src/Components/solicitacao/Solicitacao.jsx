import styles from "../solicitacao/Solicitacao.module.scss"
import Home from "../../assets/Dashboard/home header.png"
import Seta from "../../assets/Dashboard/Vector.png"
import Analises from "../../assets/Dashboard/Análises.png"
import NavBar from "../navibar/NavBar.jsx"
export default function Solicitacao() {
    return (
        <div className={styles.divGeral}>
        <NavBar />

        <div>
        <header className={styles.headerSolicitacao}>
            <img src={Home} alt="Casinha da header" />
            <img src={Seta} alt="Setinha da header" />
            <p>Reembolsos</p>
            <img src={Seta} alt="Setinha da header" />
            <p>Solicitação de Reembolsos</p>
        </header>
        <main>

        </main>
        </div>
        </div>
    );
}