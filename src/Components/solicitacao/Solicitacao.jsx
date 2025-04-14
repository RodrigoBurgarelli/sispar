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
import { useState } from "react"

export default function Solicitacao() {
    const [colaborador, setColaborador] = useState(""); // Estado para o campo colaborador
    const [empresa, setEmpresa] = useState(""); // Estado para o campo empresa
    const [nPrestacao, setnPrestacao] = useState(""); // Estado para o campo número de prestação
    const [descricao, setDescricao] = useState(""); // Estado para o campo  descrição
    const [data, setData] = useState(""); // Estado para o campo data
    const [motivo, setMotivo] = useState(""); // Estado para o campo motivo  //ESSE ESTADO É PARA QUEM TÁ FAZENDO AVANÇADO UTILIZANDO MODAL
    const [tipoReembolso, setTipoReembolso] = useState(""); // Estado para o campo tipo de reembolso
    const [centroCusto, setCentroCusto] = useState(""); // Estado para o campo centro de custo
    const [ordemInterna, setorOrdemInterna] = useState(""); // Estado para o campo ordem interna
    const [divisao, setDivisao] = useState(""); // Estado para o campo divisão
    const [pep, setPep] = useState(""); // Estado para o campo pep
    const [moeda, setMoeda] = useState(""); // Estado para o campo moeda
    const [distanciaKm, setDistanciaKm] = useState(""); // Estado para o campo distância km
    const [valorKm, setValorKm] = useState(""); // Estado para o campo valor km
    const [valorFaturado, setValorFaturado] = useState(""); // Estado para o campo valor faturado
    const [despesa, setDespesa] = useState(""); // Estado para o campo despesa

    const [dadosReembolso, setDadosReembolso] = useState([]); // criou-se um array que irá armazenar esses dados

    const handleSubmit = () => {
        const objetoReembolso = {
            colaborador,
            empresa,
            nPrestacao,
            descricao,
            data,
            tipoReembolso,
            ordemInterna,
            centroCusto,
            divisao,
            pep,
            moeda,
            distanciaKm,
            valorKm,
            valorFaturado,
            despesa
        }
        setDadosReembolso(dadosReembolso.concat(objetoReembolso))
    };


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
                    <form className={styles.formSolicitacao} action="" onSubmit={ (e) => e.preventDefault()}>
                        <div className={styles.grupo1}>
                            <div className={styles.inputNome}>
                                <label htmlFor="">Nome Completo</label>
                                <input value={colaborador} name="nome" type="text" onChange={(e) => setColaborador(e.target.value)} />
                            </div>
                            <div className={styles.inputEmpresa}>
                                <label htmlFor="">Empresa</label>
                                <input value={empresa} type="text" name="empresa" id="" onChange={(e) => setEmpresa(e.target.value)} />
                            </div>
                            <div className={styles.inputPrest}>
                                <label htmlFor="">Nº Prest. Contas</label>
                                <input value={nPrestacao} type="number" name="nPrestacao" id="" onChange={(e) => setnPrestacao(e.target.value)} />

                            </div>
                            <div className={styles.inputMotivo}>
                                <label htmlFor="">Descrição / Motivo de Reembolso</label>
                                <textarea value={descricao} name="descricaoMotivo" id="" onChange={(e) => setDescricao(e.target.value)} ></textarea>
                            </div>
                        </div>
                        <div className={styles.barraVertical}></div>

                        <div className={styles.grupo2}>
                            <div className={styles.inputData}>
                                <label htmlFor="">Data</label>
                                <input value={data} type="date" name="" id="" onChange={(e) => setData(e.target.value)} />

                            </div>

                            <div className={styles.inputTipoDespesas}>
                                <label htmlFor="">Tipo de Despesa</label>

                                <select value={tipoReembolso} name="tipoReembolso" id="" onChange={(e) => setTipoReembolso(e.target.value)} >
                                    <option value="selecionar" disabled selected>Selecionar</option>
                                    <option value="alimentacao">Alimentação</option>
                                    <option value="combustivel">Combustível</option>
                                    <option value="conducao">Condução</option>
                                    <option value="estacionamento">Estacionamento</option>
                                    <option value="viagem adm">Viagem admin.</option>
                                    <option value="viagem oper">Viagem operacional</option>
                                    <option value="eventos">Eventos de representação</option>
                                </select>
                            </div>

                            <div className={styles.inputCentroCustos}>
                                <label htmlFor="">Centro de Custos</label>
                                <select value={centroCusto} name="centroCusto" id="" onChange={(e) => setCentroCusto(e.target.value)} >
                                    <option value="selecionar" disabled selected>Selecionar</option>
                                    <option value="FIN CONTROLES INTERNOS MTZ">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                                    <option value="FIN VICE-PRESIDENCIA FINANCAS MTZ">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                                    <option value="FIN CONTABILIDADE MTZ">1100110102 - FIN CONTABILIDADE MTZ</option>
                                </select>
                            </div>

                            <div className={styles.inputOrdInt}>
                                <label htmlFor="ordemInterna">Ord. Int.</label>
                                <input value={ordemInterna} type="text" name="ordemInterna" id=""  onChange={(e) => setorOrdemInterna(e.target.value)} />
                            </div>

                            <div className={styles.inputDiv}>
                                <label htmlFor="">Div.</label>
                                <input value={divisao} type="number" name="divisao" id="" maxLength={3} onChange={(e) => setDivisao(e.target.value)} />
                            </div>

                            <div className={styles.inputPep}>
                                <label htmlFor="">PEP</label>
                                <input value={pep} type="number" name="pep" id="" onChange={(e) => setPep(e.target.value)} />
                            </div>

                            <div className={styles.inputMoeda}>
                                <label htmlFor="">Moeda</label>
                                <select value={moeda} name="moeda" id="" onChange={(e) => setMoeda(e.target.value)} >
                                    <option value="selecionar" disabled selected>Selecionar</option>
                                    <option value="BRA">BRA</option>
                                    <option value="ARS">ARS</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="CNH">CNH</option>
                                </select>
                            </div>

                            <div className={styles.inputDist}>
                                <label htmlFor="">Dist / Km</label>
                                <input value={distanciaKm} type="text" name="" id="" onChange={(e) => setDistanciaKm(e.target.value)} />
                            </div>

                            <div className={styles.inputValor}>
                                <label htmlFor="">Valor / Km</label>
                                <input value={valorKm} type="number" name="valorKm" id="" onChange={(e) => setValorKm(e.target.value)} />
                            </div>

                            <div className={styles.inputValFaturado}>
                                <label htmlFor="">Val. Faturado</label>
                                <input value={valorFaturado} type="number" name="valorFaturado" id="" onChange={(e) => setValorFaturado(e.target.value)} />
                            </div>

                            <div className={styles.inputDespesa}>
                                <label htmlFor="">Despesa</label>
                                <input value={despesa} type="number" name="despesa" id="" onChange={(e) => setDespesa(e.target.value)} />
                            </div>

                            <div className={styles.buttonG2}>
                                <button className={styles.buttonSalvar} type="submit" onClick={handleSubmit} >
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
                                {dadosReembolso.map((item, index) => (
                                    <tr>
                                        <td><img src={Lixeira} alt="ícone da lixeira" /></td>
                                        <td>{item.colaborador}</td>
                                        <td>{item.empresa}</td>
                                        <td>{item.nPrestacao}</td>
                                        <td>{item.data}</td>
                                        <td><img src={Motivo} alt="icone motivo" /></td>
                                        <td>{item.tipoReembolso}</td>
                                        <td>{item.centroCusto}</td>
                                        <td>{item.ordemInterna}</td>
                                        <td>{item.divisao}</td>
                                        <td>{item.pep}</td>
                                        <td>{item.moeda}</td>
                                        <td>{item.distanciaKm}</td>
                                        <td>{item.valorKm}</td>
                                        <td>{item.valorFaturado}</td>
                                        <td>{item.despesa}</td>
                                    </tr>  
                                ) )} 
                                
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