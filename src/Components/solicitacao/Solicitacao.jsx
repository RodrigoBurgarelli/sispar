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
                            <div className={styles.inputData}>
                                <label htmlFor="">Data</label>
                                <input type="date" name="" id="" />

                            </div>

                            <div className={styles.inputTipoDespesas}>
                                <label htmlFor="">Tipo de Despesa</label>

                                <select name="" id="">
                                    <option value="">Selecionar</option>
                                    <option value="">Alimentação</option>
                                    <option value="">Combustível</option>
                                    <option value="">Condução</option>
                                    <option value="">Estacionamento</option>
                                    <option value="">Viagem admin.</option>
                                    <option value="">Viagem operacional</option>
                                    <option value="">Eventos de representação</option>
                                </select>
                            </div>

                            <div className={styles.inputCentroCustos}>
                                <label htmlFor="">Centro de Custos</label>
                                <select name="" id="">
                                    <option value="">Selecionar</option>
                                    <option value="">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                                    <option value="">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                                    <option value="">1100110102 - FIN CONTABILIDADE MTZ</option>
                                </select>
                            </div>

                            <div className={styles.inputOrdInt}>
                                <label htmlFor="">Ord. Int.</label>
                                <input type="number" name="" id="" maxLength={4} />
                            </div>

                            <div className={styles.inputDiv}>
                                <label htmlFor="">Div.</label>
                                <input type="number" name="" id="" maxLength={3} />
                            </div>

                            <div className={styles.inputPep}>
                                <label htmlFor="">PEP</label>
                                <input type="number" name="" id="" />
                            </div>

                            <div className={styles.inputMoeda}>
                                <label htmlFor="">Moeda</label>
                                <select name="" id="">
                                    <option value="">Selecionar</option>
                                    <option value="">BRA</option>
                                    <option value="">ARS</option>
                                    <option value="">USD</option>
                                    <option value="">EUR</option>
                                    <option value="">GBP</option>
                                    <option value="">CNH</option>
                                </select>
                            </div>

                            <div className={styles.inputDist}>
                                <label htmlFor="">Dist / Km</label>
                                <input type="text" name="" id="" />
                            </div>

                            <div className={styles.inputValor}>
                                <label htmlFor="">Valor / Km</label>
                                <input type="number" name="" id="" />
                            </div>

                            <div className={styles.inputValFaturado}>
                                <label htmlFor="">Val. Faturado</label>
                                <input type="number" name="" id="" />
                            </div>

                            <div className={styles.inputDespesa}>
                                <label htmlFor="">Despesa</label>
                                <input type="number" name="" id="" />
                            </div>

                            <div className={styles.buttonG2}>
                                <button className={styles.buttonSalvar}>
                                    <img src={Mais} alt="" />
                                    <p>Salvar</p>
                                </button>
                                <button className={styles.buttonApagar}>
                                    <img src={Deletar} alt="" />
                                </button>
                            </div>
                        </div>


                    </form>


                    <div className={styles.grupo3Tabela}>
                        <table>
                            <thead>
                                <tr>
                                <th></th>
                                <th>Colaborador(a)</th>
                                <th>Empresa</th>
                                <th>Nº Prest.</th>
                                <th>Data</th>
                                <th>Motivo</th>
                                <th>Tipo de despesa</th>
                                <th>Ctr. Custo</th>
                                <th>Ord. Int.</th>
                                <th>Div.</th>
                                <th>PEP</th>
                                <th>Moeda</th>
                                <th>Dist. Km</th>
                                <th>Val. km</th>
                                <th>Valor Faturado</th>
                                <th>Despesa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                   <td><img src={Lixeira} alt="ícone da lixeira" /></td>
                                   <td>Vitor Carvalho</td>
                                   <td>WSS001</td>
                                   <td>329456</td>
                                   <td>08/01/2025</td>
                                   <td><img src={Motivo} alt="icone motivo" /></td>
                                   <td>Desp. de viagem</td>
                                   <td>1100110002 - Fin</td>
                                   <td>0003</td>
                                   <td>002</td>
                                   <td>001</td>
                                   <td>BRL</td>
                                   <td>434km</td>
                                   <td>0.65</td>
                                   <td>242.10</td>
                                   <td>40.05</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className={styles.rodapeMain}>
                        <div className={styles.espacoBranco}></div>
                        
                        <div className={styles.mRodape1}>
                            <div className={styles.inputTotalFat}>
                                <label htmlFor="">Total Faturado</label>
                                <input type="text" />
                            </div>
                            <div className={styles.inputTotalDespesa}>
                                <label htmlFor="">Total Despesa</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className={styles.mRodape2}>
                      
                            <button className={styles.bEnviar}>
                                <img src={Check} alt="" />
                                <p>Enviar para Análise</p>
                            </button>
                            <button className={styles.bCancel}>
                                <img src={Xs} alt="" />
                                <p>Enviar para Análise</p>
                            </button>
                            </div>
                        

                    </div>


                </main>
            </div>
        </div>
    );
}