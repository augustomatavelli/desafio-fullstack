import { StyledButtonCreateContact } from "../../styles/buttons"
import { UserProfile } from "../Profile"
import { SearchInput } from "../SearchInput"
import { SearchInputSection, StyledHeader } from "./style"
import { BsFillPersonPlusFill } from 'react-icons/bs'

export const Header = () => {
    return (
        <StyledHeader>
            <div>
                <UserProfile />
                <StyledButtonCreateContact><BsFillPersonPlusFill />   Criar contato</StyledButtonCreateContact>
            </div>
            <SearchInputSection>
                <SearchInput />
            </SearchInputSection>
        </StyledHeader>
    )
}