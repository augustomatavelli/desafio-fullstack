import { useContext } from "react"
import { NoContactsMessage } from "../../components/Contacts"
import { Header } from "../../components/Header"
import { ContactContext } from "../../contexts/ContactContext"
import { StyledContactInfo, StyledContactsContainer, StyledContactsList } from "./styles"
import { IoMdContacts } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhone } from 'react-icons/fi'

export const Dashboard = () => {

    const { contacts, filteredContacts } = useContext(ContactContext)

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
                            <li key={e.id}>
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
                        <li key={e.id}>
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
            </>
        )
    }
}