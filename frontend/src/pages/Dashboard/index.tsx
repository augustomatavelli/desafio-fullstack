import { useContext } from "react"
import { NoContactsMessage } from "../../components/Contacts"
import { Header } from "../../components/Header"
import { ContactContext } from "../../contexts/ContactContext"
import { StyledContactInfo, StyledContactsContainer, StyledContactsList } from "./styles"
import { IoMdContacts } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhone } from 'react-icons/fi'
import { UserContext } from "../../contexts/UserContext"
import { ModalCreateContact } from "../../components/ModalCreateContact"
import { ModalEditContact } from "../../components/ModalEditContact"
import { ModalEditProfile } from "../../components/ModalEditProfile"

export const Dashboard = () => {

    const { contacts, filteredContacts } = useContext(ContactContext)
    const { showModalEditContact } = useContext(UserContext)

    if (filteredContacts.length === 0){
        if (contacts.length > 0) {
            return (
                <>
                    <Header />
                    <StyledContactsContainer>
                        <h2>CONTATOS</h2>
                    <StyledContactsList>
                    {contacts.map((e) => {
                        return (
                            <li key={e.id} onClick={() => showModalEditContact()}>
                                <IoMdContacts size={50} />
                                <StyledContactInfo>
                                    <p>{e.name}</p>
                                    <div>
                                        <AiOutlineMail />
                                        <p>{e.email}</p>
                                    </div>
                                    <div>
                                        <FiPhone />
                                        <p>{e.phone}</p>
                                    </div>
                                </StyledContactInfo>
                            </li>
                        )
                    })}
                    </StyledContactsList>
                    </StyledContactsContainer>
                    <ModalCreateContact />
                    <ModalEditContact />
                    <ModalEditProfile />
                </>
            )
        }else {
            return (
                <>
                    <Header />
                    <NoContactsMessage />
                </>
            )
        }
    } else {
        return (
            <>
                <Header />
                <StyledContactsContainer>
                    <h2>CONTATOS</h2>
                <StyledContactsList>
                {filteredContacts.map((e) => {
                    return (
                        <li key={e.id} onClick={() => showModalEditContact()}>
                            <IoMdContacts size={50} />
                            <StyledContactInfo>
                                <p>{e.name}</p>
                                <div>
                                    <AiOutlineMail />
                                    <p>{e.email}</p>
                                </div>
                                <div>
                                    <FiPhone />
                                    <p>{e.phone}</p>
                                </div>
                            </StyledContactInfo>
                        </li>
                    )
                })}
                </StyledContactsList>
                </StyledContactsContainer>
                <ModalCreateContact />
                <ModalEditContact />
                <ModalEditProfile />
            </>
        )
    }
}