import { ReactNode } from "react";

export interface IContactProps {
    children: ReactNode;
}

export interface IContactProviderData {
    contacts: IContact[] | []

}

export interface IContact {
    id: string;
    name: string;
    email: string,
    phone: string,
}