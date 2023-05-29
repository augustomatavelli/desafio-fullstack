import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: auto;

  main {
    display: flex;
    height: 100vh;
    gap: 6rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    border-radius: 4px;
  }

  main > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }

  main > div > img {
    height: 20rem;
  }

  @media (max-width: 1000px) {
    main {
      flex-direction: column;
      justify-content: center;
    }

    main div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  main div h3 {
    font-weight: 700;
    font-size: 1.125remm;
    color: var(--color-grey-0);
  }

  main div p {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--color-grey-1);
  }
`;