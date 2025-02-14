import { useNavigate } from "react-router-dom";
import styles from "./Reembolsos.module.scss";
import Home from "../../assets/Dashboard/home header.png"
import Seta from "../../assets/Dashboard/Vector.png"
import Analises from "../../assets/Dashboard/Análises.png"
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png"
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png"
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png"
import NumeroSolicitados from "../../assets/Dashboard/Solicitados.png"
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png"
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png"
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png"
export default function Reembolsos() {
    const navigate = useNavigate() 

    const irParaSolicitacao = () => {
        navigate("/solicitacao")
    }
    
    
    return (
        <>
            <header>
                <img src={Home} alt="Casinha da header" />
                <img src={Seta} alt="Setinha da header" />
                <p>Reembolsos</p>
            </header>

            <main className={styles.mainReembolsos}>
                <h1>Sistema de Reembolsos</h1>
                <p className={styles.pMain}>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
                <section className={styles.Cards}>
                    <article onClick={irParaSolicitacao} className={styles.Card1}>
                        <img src={SolicitarReembolso} alt="Solicitar Reembolso" />
                        <p>Solicitar Reembolso</p>
                    </article>
                    <article className={styles.Card2}>
                        <img src={Analises} alt="Verificar Análise" />
                        <p>Verificar análise</p>
                    </article>
                    <article className={styles.Card3}>
                        <img src={SolicitarHistorico} alt="Solicitar Histórico" />
                        <p>Histórico</p>
                    </article>
                </section>

                <section className={styles.Indicadores}>
                    <article className={styles.ind1}>
                        
                            <img className={styles.bInd1} src={NumeroSolicitados} alt="Número de solicitações" />
                        
                        <h3>182</h3>
                        <p>Solicitados</p>
                    </article>
                    <article className={styles.ind2}>
                        
                            <img className={styles.bInd2} src={NumeroAnalises} alt="Número de análises" />
                       
                        <h3>74</h3>
                        <p>Em análise</p>
                    </article>
                    <article className={styles.ind3}>
                    
                        <img className={styles.bInd3} src={NumeroAprovados} alt="Número de aprovados" />
                       
                        <h3>19</h3>
                        <p>Aprovados</p>
                    </article>
                    <article className={styles.ind4}>
                    
                        <img className={styles.bInd4} src={NumeroRejeitados} alt="Número de Rejeitados" />
                        
                        <h3>41</h3>
                        <p>Rejeitados</p>
                    </article>


                </section>
                <section className={styles.sistemaAtualizado}>
                    <img src={Sistema} alt="Icone sistema atualizado" />
                    <a href="" >Sistema atualizado.</a>
                </section>


            </main>
        </>
    );
}