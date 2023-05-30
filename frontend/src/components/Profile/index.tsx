import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { CgProfile } from 'react-icons/cg'

export const UserProfile = () => {
    const { profile } = useContext(UserContext);

    return (
        <>
            <CgProfile />
            <h2>{profile?.name}</h2>
            <h2>{profile?.email}</h2>
            <h2>{profile?.phone}</h2>
        </>
        )
}