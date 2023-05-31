import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { StyledCloseModal } from "../../styles/buttons"
import { Modal, ModalBox } from "../Modal/styles"

export const ModalEditProfile = () => {

    const { classModalEditProfile, closeModalEditProfile } = useContext(UserContext)

    return (
        <Modal className={classModalEditProfile}>
            <ModalBox>
                <div>
                <h2>Editar Perfil</h2>
                <StyledCloseModal onClick={() => closeModalEditProfile()}>X</StyledCloseModal>
                </div>
                <div>
                </div>
            </ModalBox>
        </Modal>
    )
}