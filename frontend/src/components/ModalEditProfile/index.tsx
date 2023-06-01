import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { StyledButtonForm, StyledCloseModal } from "../../styles/buttons"
import { Modal, ModalBox } from "../Modal/styles"
import { StyledContainerModal } from "../ModalCreateContact/style"
import { StyledModalInputs } from "../../styles/inputs"
import { useForm } from "react-hook-form"
import { TEditContactData } from "../../pages/Dashboard/type"
import { editContactSerializer } from "../../pages/Dashboard/serializer"
import { zodResolver } from "@hookform/resolvers/zod"

export const ModalEditProfile = () => {

    const { classModalEditProfile, closeModalEditProfile } = useContext(UserContext)

    const { register, handleSubmit, formState:{ errors } } = useForm<TEditContactData>({
        mode: "onChange",
        resolver: zodResolver(editContactSerializer)
    })

    return (
        <Modal className={classModalEditProfile}>
            <ModalBox>
                <div>
                    <div>
                        <h2>EDITAR PERFIL</h2>
                    </div>
                <StyledCloseModal onClick={() => closeModalEditProfile()}>X</StyledCloseModal>
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