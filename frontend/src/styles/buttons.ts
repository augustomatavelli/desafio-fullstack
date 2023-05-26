import styled from "styled-components";

export const StyledButtonForm = styled.button`
  background-color: var(--color-primary);
  padding: 0.75rem;
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