import { createContext, useContext, useEffect, useState } from "react";
import { IContact, IContactProps, IContactProviderData } from "./type";
import { UserContext } from "../UserContext";
import api from "../../services/api";
import { toast } from "react-toastify";

export const ContactContext = createContext({} as IContactProviderData)

export const ContactProvider = ({children}: IContactProps) => {

    const [contacts, setContacts] = useState<IContact[] | []>([])
    const [filteredContacts, setFilteredContacts] = useState<IContact[] | []>([]);
    const { setLoading, Logout } = useContext(UserContext);

    useEffect(() => {
        async function getContacts() {
          const token = localStorage.getItem("@TOKEN") as string;

          if (!token) {
            setLoading(false);
            return;
          } else {
            try {
                api.defaults.headers.common.authorization = `Bearer ${token}`;
                const request = await api.get("/contacts");
                const response = await request.data;
                setContacts(response);
            } catch (err) {
                toast.error("Ops...Algo deu errado!");
                Logout()
            } finally {
                setLoading(false);
            }
          }
        }
        getContacts();
      }, [setLoading, Logout]);

    return (
        <ContactContext.Provider value={{contacts, setFilteredContacts, filteredContacts}}>
            {children}
        </ContactContext.Provider>
    )
}