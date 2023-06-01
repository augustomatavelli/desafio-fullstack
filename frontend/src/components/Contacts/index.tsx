import { StyledNoContactMessage } from "./style"
import { ImSad } from 'react-icons/im'

export const NoContactsMessage = () => {
    return (
        <StyledNoContactMessage>
            <div>
                <h2>Você ainda não possui nenhum contato...</h2>
                <ImSad size={50}/>
            </div>
            <h4>Clique no botão acima e cadastre!!</h4>
        </StyledNoContactMessage>
    )
}