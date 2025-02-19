import styles from "../solicitacao/Solicitacao.module.scss"
import Home from "../../assets/Dashboard/home header.png"
import Seta from "../../assets/Dashboard/Vector.png"
import Analises from "../../assets/Dashboard/Análises.png"
import NavBar from "../navibar/NavBar.jsx"
import Mais from "../../assets/Solicitacao/+.png"
import Calendario from "../../assets/Solicitacao/calendario.png"
import Check from "../../assets/Solicitacao/check.png"
import Deletar from "../../assets/Solicitacao/deletar.png"
import Lixeira from "../../assets/Solicitacao/lixeira.png"
import Motivo from "../../assets/Solicitacao/motivo.png"
import Baixa from "../../assets/Solicitacao/seta baixa.png"
import Xs from "../../assets/Solicitacao/x.png"

export default function Solicitacao() {
    return (
        <div className={styles.divGeralSolicitacao}>
            <NavBar />

            <div className={styles.containerPrincipalSolicitacao}>
                <header className={styles.headerSolicitacao}>
                    <img src={Home} alt="Casinha da header" />
                    <img src={Seta} alt="Setinha da header" />
                    <p>Reembolsos</p>
                    <img src={Seta} alt="Setinha da header" />
                    <p>Solicitação de Reembolsos</p>
                </header>
                <main className={styles.mainSolicitacao}>
                    <form className={styles.formSolicitacao} action="">
                        <div className={styles.grupo1}>
                            <div className={styles.inputNome}>
                                <label htmlFor="">Nome Completo</label>
                                <input type="text" />
                            </div>
                            <div className={styles.inputEmpresa}>
                                <label htmlFor="">Empresa</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className={styles.inputPrest}>
                                <label htmlFor="">Nº Prest. Contas</label>
                                <input type="text" />

                            </div>
                            <div className={styles.inputMotivo}>
                                <label htmlFor="">Descrição / Motivo de Reembolso</label>
                                <textarea name="" id=""></textarea>
                            </div>
                        </div>
                        <div className={styles.barraVertical}></div>

                        <div className={styles.grupo2}>
                            <div className={styles.inputDate}>
                                <label htmlFor="">Data</label>
                                <input type="date" name="" id="" />

                            </div>
                            <div className={styles.inputDespesas}>
                                <label htmlFor="">Tipo de Despesa</label>

                                <select name="" id="">
                                    <option value="">Selecionar</option>
                                    <option value="">Alimentação</option>
                                    <option value="">Combustível</option>
                                    <option value="">Condução</option>
                                </select>

                            </div>

                        </div>

                    </form>


                </main>
            </div>
        </div>
    );
}