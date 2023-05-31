import { useContext } from "react"
import { StyledButtonCreateContact } from "../../styles/buttons"
import { UserProfile } from "../Profile"
import { SearchInput } from "../SearchInput"
import { SearchInputSection, StyledHeader } from "./style"
import { BsFillPersonPlusFill } from 'react-icons/bs'
import { UserContext } from "../../contexts/UserContext"

export const Header = () => {

    const { showModalCreateContact } = useContext(UserContext)

    return (
        <StyledHeader>
            <div>
                <UserProfile />
                <StyledButtonCreateContact onClick={() => showModalCreateContact()}><BsFillPersonPlusFill />   Criar contato</StyledButtonCreateContact>
            </div>
            <SearchInputSection>
                <SearchInput />
            </SearchInputSection>
        </StyledHeader>
    )
}