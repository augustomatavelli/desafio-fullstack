import styled from "styled-components";

export const StyledContactsContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 1000px;
  margin: 10rem auto;
  gap: 5rem;

  h2 {
    font-size: 3rem
  }
`

export const StyledContactsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  padding: 0;
  gap: 4rem;
  margin-top: 0;
  width: 100%;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    padding: 1rem;
    gap: 0.5rem;
    border: 2px solid var(--color-grey-100);
    cursor: pointer;
  }
`

export const StyledContactInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 1rem;
    gap: 1rem;

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`