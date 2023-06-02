import { createContext, useContext, useEffect, useState } from "react";
import { IContact, IContactProps, IContactProviderData, IEditContact, IRegisterContact } from "./type";
import { UserContext } from "../UserContext";
import api from "../../services/api";
import { toast } from "react-toastify";

export const ContactContext = createContext({} as IContactProviderData)

export const ContactProvider = ({children}: IContactProps) => {

    const [contacts, setContacts] = useState<IContact[] | []>([])
    const [filteredContacts, setFilteredContacts] = useState<IContact[] | []>([]);
    const { setLoading, Logout, closeModalEditContact, closeModalCreateContact } = useContext(UserContext);

    const createContactFunction = async (data: IRegisterContact) => {
      try {
        await api.post('/contacts', data).then((res) => res.data)
        toast.success("Cadastrando ...")
        setTimeout(() => {
          closeModalCreateContact()
        }, 3000)
      } catch (error) {
        toast.error("Ops...algo deu errado!")
      } finally {
        setLoading(false)
      }
    }

    const editContactFunction = async (data: IEditContact) => {
      const contactId = localStorage.getItem("@CONTACTID")
      if(data.name === ""){
        delete data.name
      }
      if(data.email === ""){
        delete data.email
      }
      if(data.phone === ""){
        delete data.phone
      }
      try {
        await api.patch(`/contacts/${contactId}`, data).then((res) => res.data)
        toast.success("Alterando ..." )
        setTimeout(() => {
          closeModalEditContact()
        }, 3000)
      } catch (error) {
        toast.error("Ops...algo deu errado!")
      } finally {
        setLoading(false)
      }
    }

    const deleteContactFunction = async () => {
      const contactId = localStorage.getItem("@CONTACTID")
      try {
        await api.delete(`/contacts/${contactId}`)
        toast.success("Excluindo contato ...")
        setTimeout(() => {
          closeModalEditContact()
        }, 3000)
      } catch (error) {
        toast.error("Ops...algo deu errado!")
      } finally {
        setLoading(false)
      }
    }

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
    }, [setLoading, Logout, contacts]);

    return (
        <ContactContext.Provider value={{contacts, setFilteredContacts, filteredContacts, createContactFunction, editContactFunction, deleteContactFunction}}>
            {children}
        </ContactContext.Provider>
    )
}