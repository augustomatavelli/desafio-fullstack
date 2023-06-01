import styled from "styled-components";

export const StyledInputs = styled.input`
  padding: 0.75rem;
  border: 2px solid var(--color-grey-0);
  border-radius: 8px;
  color: var(--color-grey-300);
  background-color: var(--color-grey-0);

  &:focus {
    background-color: #fff;
    color: var(--color-grey-600);
    border: 2px solid var(--color-grey-600);
  }
`;

export const StyledModalInputs = styled.input`
  padding: 0.75rem;
  width: 100%;
  border: 2px solid var(--color-grey-100);
  border-radius: 8px;
  color: var(--color-grey-300);
  background-color: var(--color-grey-0);

  &:focus {
    background-color: #fff;
    color: var(--color-grey-600);
    border: 2px solid var(--color-grey-600);
  }
`;