import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { StyledButtonForm, StyledCloseModal, StyledDeleteButtonForm } from "../../styles/buttons"
import { Modal, ModalBox } from "../Modal/styles"
import { StyledContainerModal } from "../ModalCreateContact/style"
import { StyledModalInputs } from "../../styles/inputs"
import { useForm } from "react-hook-form"
import { TEditContactData } from "../../pages/Dashboard/type"
import { zodResolver } from "@hookform/resolvers/zod"
import { editContactSerializer } from "../../pages/Dashboard/serializer"
import { ContactContext } from "../../contexts/ContactContext"

export const ModalEditContact = () => {

    const { classModalEditContact, closeModalEditContact } = useContext(UserContext)
    const { editContactFunction, deleteContactFunction } = useContext(ContactContext)

    const { register, handleSubmit, formState:{ errors } } = useForm<TEditContactData>({
        mode: "onChange",
        resolver: zodResolver(editContactSerializer)
    })

    return (
        <Modal className={classModalEditContact}>
            <ModalBox>
                <div>
                    <div>
                        <h2>EDITAR CONTATO</h2>
                    </div>
                <StyledCloseModal onClick={() => closeModalEditContact()}>X</StyledCloseModal>
                </div>
                <StyledContainerModal onSubmit={handleSubmit(editContactFunction)}>
                    <label htmlFor="name">Nome</label>
                    <StyledModalInputs type='name' id='name' placeholder="Digite o nome do seu contato..." {...register('name')}/>
                    {errors.name?.message && <p>{errors.name.message}</p>}
                    <label htmlFor="email">Email</label>
                    <StyledModalInputs type='email' id='email' placeholder="Digite o email do seu contato..." {...register('email')} />
                    {errors.email?.message && <p>{errors.email.message}</p>}
                    <label htmlFor="phone">Telefone</label>
                    <StyledModalInputs type='phone' id='phone' placeholder="Digite o telefone do seu contato..." {...register('phone')} />
                    {errors.phone?.message && <p>{errors.phone.message}</p>}
                    <div>
                        <StyledButtonForm type="submit">Salvar</StyledButtonForm>
                        <StyledDeleteButtonForm type="button" onClick={deleteContactFunction}>Excluir</StyledDeleteButtonForm>
                    </div>
                </StyledContainerModal>
            </ModalBox>
        </Modal>
    )
}