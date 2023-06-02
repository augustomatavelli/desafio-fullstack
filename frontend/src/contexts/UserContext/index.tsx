/* eslint-disable no-sequences */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { ILoginUser, IRegisterUser, IUserProps, IUserProviderData, IUser, IUserId, IEditUser } from "./type";

export const UserContext = createContext({} as IUserProviderData)

export const UserProvider = ({children}: IUserProps) => {
    const [id, setId] = useState<IUserId | null>(null)
    const [profile, setProfile] = useState<IUser | null>(null)
    const [loading, setLoading] = useState(true)
    const [classModalCreactContact, setClassModalCreactContact] = useState<string>("");
    const [classModalEditContact, setClassModalEditContact] = useState<string>("");
    const [classModalEditProfile, setClassModalEditProfile] = useState<string>("");
    const navigate = useNavigate()

    const saveLocalStorage = (token: string, id: string) => {
        JSON.stringify(token);
        JSON.stringify(id);
        localStorage.setItem("@TOKEN", token);
        localStorage.setItem("@USERID", id);
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
          const { id: userId } = response.data;
          toast.success("Logando ...");
          saveLocalStorage(response.data.token, response.data.id);
          setId(userId);
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        } catch {
          toast.error("Email ou senha inválidos!");
        } finally {
          setLoading(false);
        }
    };

    const editProfileFunction = async (data: IEditUser) => {
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
        const userId = localStorage.getItem("@USERID") as string
        await api.patch(`/users/${userId}`, data)
        toast.success("Atualizando dados ...")
        setTimeout(() => {
          closeModalEditProfile()
        }, 3000)
      } catch (error) {
        toast.error("Ops...algo deu errado!")
      } finally {
        setLoading(false)
      }
    }

    const Logout = () => {
        localStorage.clear();
        setId(null);
        setProfile(null)
    };

    const showModalCreateContact = () => {
      setClassModalCreactContact("show");
    };

    const closeModalCreateContact = () => {
      setClassModalCreactContact("");
    };

    const showModalEditContact = (id: string) => {
      localStorage.setItem("@CONTACTID", id)
      setClassModalEditContact("show");
    };

    const closeModalEditContact = () => {
      localStorage.setItem("@CONTACTID", "")
      setClassModalEditContact("");
    };

    const showModalEditProfile = () => {
      setClassModalEditProfile("show");
    };

    const closeModalEditProfile = () => {
      setClassModalEditProfile("");
    };

    useEffect(() => {
      const getUserProfile = async () => {
        const token = localStorage.getItem("@TOKEN") as string;
        if (!token) {
          setLoading(false);
          return;
        } else {
          try{
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            const request = await api.get(`/users/${id}`);
            const response = await request.data;
            setProfile(response)
          }catch(err){
            toast.error("Ops...Algo deu errado!");
            Logout()
          }finally{
            setLoading(false)
          }
        }
      }
      getUserProfile()
    }, [id, profile])

    return (
        <UserContext.Provider value={{id, setId, loading, setLoading, saveLocalStorage, registerFunction,  loginFunction, profile, Logout, showModalCreateContact, closeModalCreateContact, showModalEditContact, closeModalEditContact, showModalEditProfile, closeModalEditProfile, classModalCreactContact, classModalEditContact, classModalEditProfile, editProfileFunction}}>
            {children}
        </UserContext.Provider>
    )
}