import { useNavigate } from "react-router-dom"; //importando o hook useNavigate
import Capa from "../../assets/Tela Login/imagem tela de login.png"
import Logo from "../../assets/Tela Login/logo-ws.png"
import styles from "./Login.module.scss"


export default function Login() {
const navigate = useNavigate() // iniciando o hook useNavigare

const irParaReembolso = () => {
    navigate("/reembolsos") // essa linha vai redirecionar para a página de reembolsos
}

    return (
        <main className={styles.mainLogin}>
            <section className={styles.containerLogin}>
                
            </section>
            <section className={styles.containerForm}>
                <img src={Logo} alt="Logo Wilson Sons" />
                <h1>Boas vindas ao Novo Portal SISPAR</h1>
                <p>Sistema de Emissão de Boletos e Parcelamento</p>
                <form action="">
                    <input 
                    type="email" 
                    name="Email" 
                    id="Email" 
                    placeholder="Email" />
                    <input 
                    type="password" 
                    name="Senha" 
                    id="Senha" 
                    placeholder="Senha" />
                    <a href="">Esqueci minha senha</a>
                    <div className= {styles.buttonGroup}>
                        <button onClick={irParaReembolso} className={styles.containerEntrar}>Entrar</button>
                        <button className={styles.containerCriar}>Criar conta</button>
                    </div>
                </form>

            </section>
        </main>
    );
}
