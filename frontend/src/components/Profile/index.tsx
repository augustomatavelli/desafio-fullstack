import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { CgProfile } from 'react-icons/cg'
import { FaUserEdit } from 'react-icons/fa'
import { StyledProfileInfo } from "./style";
import { StyledButtonProfile } from "../../styles/buttons";
import { SlLogout } from 'react-icons/sl'

export const UserProfile = () => {
    const { profile, Logout } = useContext(UserContext);

    return (
        <StyledProfileInfo>
            <div>
                <CgProfile size={80} />
                <StyledButtonProfile onClick={Logout}><SlLogout />   Logout</StyledButtonProfile>
            </div>
            <div>
                <h1>{profile?.name}</h1>
                <h4>{profile?.email}</h4>
                <h4>{profile?.phone}</h4>
                <StyledButtonProfile><FaUserEdit /></StyledButtonProfile>
            </div>
        </StyledProfileInfo>
        )
}