import { zodResolver } from "@hookform/resolvers/zod"
import { TRegisterData } from "../../pages/Register/type"
import { registerSerializer } from "../../pages/Register/serializer"
import { useForm } from "react-hook-form"
import { StyledInputs } from "../../styles/inputs"
import { StyledRegisterForm } from "./styles"
import { StyledButtonForm } from "../../styles/buttons"
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export const RegisterForm = () => {
    const { registerFunction } = useContext(UserContext);

    const { register, handleSubmit, formState:{ errors } } = useForm<TRegisterData>({
        mode: "onChange",
        resolver: zodResolver(registerSerializer)
    })
    return (
        <>
            <StyledRegisterForm onSubmit={handleSubmit(registerFunction)}>
                <h2>Cadastro</h2>
                <label htmlFor="name">Nome</label>
                <StyledInputs type="text" id="name" placeholder="Digite o seu nome..." {...register('name')} />
                {errors.name?.message && <p>*{errors.name.message}</p>}

                <label htmlFor="email">Email</label>
                <StyledInputs type="email" id="email" placeholder="Digite o seu email..." {...register('email')} />
                {errors.email?.message && <p>*{errors.email.message}</p>}

                <label htmlFor="phone">Telefone</label>
                <StyledInputs type="text" id="phone" placeholder="Digite o seu telefone..." {...register('phone')} />
                {errors.phone?.message && <p>*{errors.phone.message}</p>}

                <label htmlFor="password">Senha</label>
                <StyledInputs type="password" id="password" placeholder="Digite a sua senha..." {...register('password')} />
                {errors.password?.message && <p>*{errors.password.message}</p>}

                <StyledButtonForm type="submit">Cadastrar</StyledButtonForm>
            </StyledRegisterForm>
        </>
        )
}