import styled from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  border-radius: 5px;
  border: 2px solid var(--color-grey-0);
  padding: 1.5rem;
  width: 50%;

  h2 {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 3rem;
  }

  p {
    color: red;
    font-size: 0.875rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }

  div span {
    font-weight: 600;
    font-size: 2rem;
    color: var(--color-grey-600);
    text-align: center;
  }

  div a {
    background-color: #0B6E4F;
    padding: 0.75rem;
    border-radius: 8px;
    color: var(--color-grey-0);
    transition: 0.4s;
    border: none;
    width: 100%;
    margin: 0.5rem auto;
    text-decoration: none;
    transition: 0.4s;
    text-align: center;
  }

  div a:hover {
    background-color: #6BBF59;
    color: var(--color-grey-100);
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;