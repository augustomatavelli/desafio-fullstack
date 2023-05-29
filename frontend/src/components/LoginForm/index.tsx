import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TLoginData } from "../../pages/Login/type"
import {loginSerializer} from '../../pages/Login/serializer'
import { StyledLoginForm } from "./styles"
import { StyledInputs } from "../../styles/inputs"
import { StyledButtonForm } from "../../styles/buttons"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { LoginToRegister } from "../LoginToRegister"

export const LoginForm = () => {
    const { loginFunction } = useContext(UserContext);

    const { register, handleSubmit, formState:{ errors } } = useForm<TLoginData>({
        mode: "onChange",
        resolver: zodResolver(loginSerializer)
    })
    return (
        <>
            <StyledLoginForm onSubmit={handleSubmit(loginFunction)}>
            <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <StyledInputs type="email" id="email" placeholder="Digite o seu email..." {...register('email')} />
                {errors.email?.message && <p>{errors.email.message}</p>}

                <label htmlFor="password">Senha</label>
                <StyledInputs type="password" id="password" placeholder="Digite a sua senha..." {...register('password')} />
                {errors.password?.message && <p>{errors.password.message}</p>}

                <StyledButtonForm type="submit">Entrar</StyledButtonForm>
                <LoginToRegister />
            </StyledLoginForm>
        </>
        )
}