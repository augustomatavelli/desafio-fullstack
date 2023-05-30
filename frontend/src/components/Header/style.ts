import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 1000px;
    margin: 5rem auto;

    > div {
        display: flex;
        flex-direction: column;
        gap: 5rem;
    }
`

export const SearchInputSection = styled.section`
    display: flex;
    height: 100%;
`
