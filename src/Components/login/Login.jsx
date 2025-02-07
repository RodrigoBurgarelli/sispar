import Capa from "../../assets/Tela Login/imagem tela de login.png"
import Logo from "../../assets/Tela Login/logo-ws.png"
export default function Login() {
    return (
        <main>
            <section>
                <p>Reservado para imagem</p>
            </section>
            <section>
                <img src={Logo} alt="Logo Wilson Sons" />
                <h1>Boas vindas ao Novo Portal SISPAR</h1>
                <p>Sistema de Emissão de Boletos e Parcelamento</p>
                <form action="">
                    <input type="email" name="Email" id="Email" placeholder="Email" />
                    <input type="password" name="Senha" id="Senha" placeholder="Senha" />
                    <a href="">Esqueci minha senha</a>
                    <div>
                        <button>Entrar</button>
                        <button>Criar conta</button>
                    </div>
                </form>

            </section>
        </main>
    );
}
