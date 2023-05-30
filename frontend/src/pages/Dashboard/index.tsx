import { useContext } from "react"
import { Contacts } from "../../components/Contacts"
import { Header } from "../../components/Header"
import { ContactContext } from "../../contexts/ContactContext"

export const Dashboard = () => {

    const { contacts } = useContext(ContactContext)

    if (contacts.length > 0) {
        return (
            <>
                {contacts.map((e) => {
                    return (
                        <>
                            <Header />
                            <section>
                                <li key={e.id}>{e.name}</li>
                            </section>
                        </>
                    )
                })}
            </>
        )
    }else {
        return (
            <>
                <Header />
                <Contacts />
            </>
        )
    }
}