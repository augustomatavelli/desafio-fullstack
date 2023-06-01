import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { StyledButtonForm, StyledCloseModal } from "../../styles/buttons"
import { Modal, ModalBox } from "../Modal/styles"
import { StyledModalInputs } from "../../styles/inputs"
import { StyledContainerModal } from "./style"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerContactSerializer } from "../../pages/Dashboard/serializer"
import { TRegisterContactData } from "../../pages/Dashboard/type"

export const ModalCreateContact = () => {

    const { classModalCreactContact, closeModalCreateContact } = useContext(UserContext)

    const { register, handleSubmit, formState:{ errors } } = useForm<TRegisterContactData>({
        mode: "onChange",
        resolver: zodResolver(registerContactSerializer)
    })

    return (
        <Modal className={classModalCreactContact}>
            <ModalBox>
                <div>
                    <div>
                        <h2>CRIAR CONTATO</h2>
                    </div>
                <StyledCloseModal onClick={() => closeModalCreateContact()}>X</StyledCloseModal>
                </div>
                <StyledContainerModal>
                    <label htmlFor="name">Nome</label>
                    <StyledModalInputs type='name' id='name' placeholder="Digite o nome do seu contato..." {...register('name')}/>
                    {errors.name?.message && <p>{errors.name.message}</p>}
                    <label htmlFor="email">Email</label>
                    <StyledModalInputs type='email' id='email' placeholder="Digite o email do seu contato..." {...register('email')} />
                    {errors.email?.message && <p>{errors.email.message}</p>}
                    <label htmlFor="phone">Telefone</label>
                    <StyledModalInputs type='phone' id='phone' placeholder="Digite o telefone do seu contato..." {...register('phone')} />
                    {errors.phone?.message && <p>{errors.phone.message}</p>}
                    <StyledButtonForm type="submit">Salvar</StyledButtonForm>
                </StyledContainerModal>
            </ModalBox>
        </Modal>
    )
}