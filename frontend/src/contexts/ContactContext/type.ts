import { ReactNode } from "react";

export interface IContactProps {
    children: ReactNode;
}

export interface IContactProviderData {
    contacts: IContact[] | [];
    setFilteredContacts: React.Dispatch<React.SetStateAction<IContact[] | []>>;
    filteredContacts: IContact[] | [];
    createContactFunction: (data: IRegisterContact) => Promise<void>;
    editContactFunction: (data: IEditContact) => Promise<void>
    deleteContactFunction: () => Promise<void>;
}

export interface IContact {
    id: string;
    name: string;
    email: string,
    phone: string,
}

export interface IRegisterContact {
    name: string;
    email: string;
    phone: string,
}

export interface IEditContact {
    name?: string;
    email?: string;
    phone?: string,
}