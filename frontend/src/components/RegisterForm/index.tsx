import { zodResolver } from "@hookform/resolvers/zod"
import { TRegisterData } from "../../pages/Register/type"
import { registerSerializer } from "../../pages/Register/serializer"
import { useForm } from "react-hook-form"
import { StyledInputs } from "../../styles/inputs"
import { StyledRegisterForm } from "./styles"
import { StyledButtonForm } from "../../styles/buttons"
import "react-toastify/dist/ReactToastify.css";

export const RegisterForm = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm<TRegisterData>({
        mode: "onChange",
        resolver: zodResolver(registerSerializer)
    })
    return (
        <main>
            <h2>Cadastro</h2>
            <StyledRegisterForm onSubmit={handleSubmit()}>
                <label htmlFor="name">Nome</label>
                <StyledInputs type="text" id="name" placeholder="Digite o seu nome..." {...register('name')} />
                {errors.name?.message && <p>*{errors.name.message}</p>}

                <label htmlFor="email">Email</label>
                <StyledInputs type="email" id="email" placeholder="Digite o seu email..." {...register('email')} />
                {errors.name?.message && <p>*{errors.name.message}</p>}

                <label htmlFor="password">Senha</label>
                <StyledInputs type="password" id="password" placeholder="Digite a sua senha..." {...register('password')} />
                {errors.name?.message && <p>*{errors.name.message}</p>}

                <StyledButtonForm type="submit">Cadastrar</StyledButtonForm>
            </StyledRegisterForm>
        </main>
        )
}