import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { StyledCloseModal } from "../../styles/buttons"
import { Modal, ModalBox } from "../Modal/styles"

export const ModalCreateContact = () => {

    const { classModalCreactContact, closeModalCreateContact } = useContext(UserContext)

    return (
        <Modal className={classModalCreactContact}>
            <ModalBox>
                <div>
                <h2>Criar contato</h2>
                <StyledCloseModal onClick={() => closeModalCreateContact()}>X</StyledCloseModal>
                </div>
                <div>
                </div>
            </ModalBox>
        </Modal>
    )
}