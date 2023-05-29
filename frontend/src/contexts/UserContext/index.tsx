/* eslint-disable no-sequences */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { ILoginUser, IRegisterUser, IUserData, IUserProps, IUserProviderData } from "./type";

export const UserContext = createContext({} as IUserProviderData)

export const UserProvider = ({children}: IUserProps) => {
    const [user, setUser] = useState<IUserData | null>(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const saveLocalStorage = (token: string) => {
        JSON.stringify(token);
        localStorage.setItem("@TOKEN", token);
    };

    const registerFunction = async (data: IRegisterUser) => {
        try {
          await api.post("/users", data).then((res) => res.data);
          toast.success("Cadastrando ...");
          setTimeout(() => {
            navigate("login");
          }, 3000);
        } catch {
          toast.error("Ops...algo deu errado!");
        } finally {
          setLoading(false);
        }
      };

    const loginFunction = async (data: ILoginUser) => {
        try {
          const response = await api.post("/login", data);
          const { user: userResponse } = response.data;
          console.log(response.data)
          toast.success("Logando ...");
          saveLocalStorage(response.data.token);
          setUser(userResponse);
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        } catch {
          toast.error("Email ou senha inválidos!");
        } finally {
          setLoading(false);
        }
      };

    return (
        <UserContext.Provider value={{user, setUser, loading, setLoading, saveLocalStorage, registerFunction,  loginFunction}}>
            {children}
        </UserContext.Provider>
    )
}