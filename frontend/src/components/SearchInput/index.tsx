import { StyledForm } from "./style"

export const SearchInput = () => {
    return (
        <StyledForm>
            <input
                name="input"
                type="text"
                placeholder="Digite o nome do contato..."
                //onChange={(event) => setInputValue(event.target.value)}
            />
            <button type="submit">Pesquisar</button>
        </StyledForm>
    )
}