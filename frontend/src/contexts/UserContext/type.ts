import { ReactNode } from "react";

export interface IUserProps {
    children: ReactNode;
}

export interface IUserProviderData {
    id: IUserId | null;
    setId: React.Dispatch<React.SetStateAction<IUserId | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    saveLocalStorage: (token: string, id: string) => void;
    registerFunction: (data: IRegisterUser) => Promise<void>;
    loginFunction: (data: ILoginUser) => Promise<void>;
    profile: IUser | null;
    Logout: () => void;
    showModalCreateContact: () => void;
    closeModalCreateContact: () => void;
    showModalEditContact: (id: string) => void;
    closeModalEditContact: () => void;
    showModalEditProfile: () => void;
    closeModalEditProfile: () => void;
    classModalCreactContact: string;
    classModalEditContact: string;
    classModalEditProfile: string;
    editProfileFunction: (data: IEditUser) => Promise<void>;
    deleteProfileFunction: () => Promise<void>
}

export interface IUserId {
    id: string;
}

export interface IUser {
    id: string;
    name: string;
    email: string,
    phone: string,
    password: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  phone: string,
  password: string;
}

export interface IEditUser {
  name?: string;
  email?: string;
  phone?: string,
}

export interface ILoginUser {
  email: string;
  password: string;
}
