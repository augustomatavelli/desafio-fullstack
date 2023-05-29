import { ReactNode } from "react";

export interface IUserProps {
    children: ReactNode;
}

export interface IUserProviderData {
    user: IUserData | null;
    setUser: React.Dispatch<React.SetStateAction<IUserData | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    saveLocalStorage: (token: string) => void;
    registerFunction: (data: IRegisterUser) => Promise<void>;
    loginFunction: (data: ILoginUser) => Promise<void>;
}

export interface IUserData {
    token: string;
    user: IUser;
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

  export interface ILoginUser {
    email: string;
    password: string;
  }
