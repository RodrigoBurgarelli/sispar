import { useNavigate } from "react-router-dom"; //importando o hook useNavigate
import Capa from "../../assets/Tela Login/imagem tela de login.png"
import Logo from "../../assets/Tela Login/logo-ws.png"
import styles from "./Login.module.scss"
import api from "../../services/Api.jsx";
import { useState } from "react";



export default function Login() {
    const navigate = useNavigate() // iniciando o hook useNavigare

    const irParaReembolso = () => {
        navigate("/reembolsos") // essa linha vai redirecionar para a página de reembolsos
    }

    //Iniciando os estados
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const fazerLogin = async (e) =>{
        e.preventDefault()

        try{
            const resposta = await api.post("/colaborador/login", {
                "email": email,
                "senha": senha
            })
            console.log(resposta.data)
            alert("Login realizado com sucesso!")
            irParaReembolso() // <-- aqui vai fazer o redirecionamento

        }catch(error){
            console.log("Erro ao fazer login", error)
            alert("Erro no login aqui ó")
        }
    }

    return (
        <main className={styles.mainLogin}>
            <section className={styles.containerLogin}>

            </section>
            <section className={styles.containerForm}>
                <img src={Logo} alt="Logo Wilson Sons" />
                <h1>Boas vindas ao Novo Portal SISPAR</h1>
                <p>Sistema de Emissão de Boletos e Parcelamento</p>
                <form className={styles.formLogin} action="">
                    <input
                        type="email"
                        name="Email"
                        id="Email"
                        placeholder="Email"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        />

                    <input
                        type="password"
                        name="Senha"
                        id="Senha"
                        placeholder="Senha" 
                        value = {senha}
                        onChange = {(e) => setSenha(e.target.value)}
                        />
                    <a href="">Esqueci minha senha</a>
                    <div className={styles.buttonGroup}>
                        <button onClick={fazerLogin} className={styles.containerEntrar}>Entrar</button>
                        <button className={styles.containerCriar}>Criar conta</button>
                    </div>
                </form>

            </section>
        </main>
    );
}
