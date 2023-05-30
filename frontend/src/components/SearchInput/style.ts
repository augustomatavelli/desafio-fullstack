import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  gap: 1rem;

  input {
    border-radius: 8px;
    padding: 1rem 1.25rem;
    border: 2px solid var(--color-grey-100);
  }
  input::placeholder {
    color: var(--color-grey-100);
  }
  button {
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
    padding: 0.75rem 1.25rem;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    transition: 0.4s;
  }
  button:hover {
    background: var(--color-primary-focus);
    border: 2px solid var(--color-primary-focus);
  }
`;