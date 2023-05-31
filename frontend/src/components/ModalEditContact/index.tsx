import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { StyledCloseModal } from "../../styles/buttons"
import { Modal, ModalBox } from "../Modal/styles"

export const ModalEditContact = () => {

    const { classModalEditContact, closeModalEditContact } = useContext(UserContext)

    return (
        <Modal className={classModalEditContact}>
            <ModalBox>
                <div>
                <h2>Editar Contato</h2>
                <StyledCloseModal onClick={() => closeModalEditContact()}>X</StyledCloseModal>
                </div>
                <div>
                </div>
            </ModalBox>
        </Modal>
    )
}