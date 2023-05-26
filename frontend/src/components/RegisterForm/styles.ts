import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  border-radius: 5px;
  border: 2px solid var(--color-grey-0);
  padding: 1.5rem;
  width: 50%;

  p {
    color: red;
    font-size: 0.875rem;
  }

  a {
    color: var(--color-grey-300);
    transition: 0.4s;
    width: 100%;
    text-decoration: none;
    transition: 0.4s;
    text-align: right;
  }

  a:hover {
    text-decoration: underline;
    color: var(--color-grey-600);
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;