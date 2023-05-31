import styled from "styled-components";

export const StyledButtonForm = styled.button`
  background-color: var(--color-primary);
  padding: 1.25rem;
  border-radius: 8px;
  color: var(--color-grey-0);
  transition: 0.4s;
  border: none;
  width: 100%;
  margin: 0.5rem auto;

  &:hover {
    background-color: var(--color-primary-focus);
  }
`;

export const StyledButtonCreateContact = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: var(--color-primary);
  padding: 1.25rem;
  border-radius: 8px;
  color: var(--color-grey-0);
  transition: 0.4s;
  border: none;
  width: 75%;

  &:hover {
    background-color: var(--color-primary-focus);
  }
`;

export const StyledButtonProfile = styled.button`
  background-color: white;
  border: none;
  text-align: left;
  width: 100%;

  &:hover {
    color: blue;
  }
`

export const StyledCloseModal = styled.button`
  background-color: transparent;
  color: var(--color-grey-300);
  font-size: 3rem;
  border: none;

  &:hover {
    color: black;
  }
`;