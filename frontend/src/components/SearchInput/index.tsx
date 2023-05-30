import { useContext, useState } from "react";
import { StyledForm } from "./style"
import { ContactContext } from "../../contexts/ContactContext";

export const SearchInput = () => {

    const { setFilteredContacts, contacts } = useContext(ContactContext)

    const [inputValue, setInputValue] = useState<string>("");

    const handleFilter = (event: React.FormEvent) => {
        event.preventDefault();

        if (inputValue === "") {
            setFilteredContacts(contacts);
        } else {
          const contactFiltered = contacts.filter((e) =>
            e.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          setFilteredContacts(contactFiltered);
        }
      };

    return (
        <StyledForm onSubmit={(event) => handleFilter(event)}>
            <input
                name="input"
                type="text"
                placeholder="Digite o nome do contato..."
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button type="submit">Pesquisar</button>
        </StyledForm>
    )
}