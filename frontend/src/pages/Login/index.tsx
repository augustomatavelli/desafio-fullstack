import { LoginForm } from "../../components/LoginForm"
import { Container } from "../../styles/container"

export const Login = () => {
    return (
        <Container>
            <main>
                <div>
                    <img src={require('../../images/image_003.png')} alt="friends" />
                    <h2>Cadastre seus contatos!</h2>
                </div>
                <LoginForm />
            </main>
        </Container>
    )
}