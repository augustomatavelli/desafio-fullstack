import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  ${(props) => {
    if (props.className === "show") return `display: flex`;
  }};
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-grey-0);
  width: 30%;
  padding: 3rem;
  gap: 4rem;
  border-radius: 8px;

  h2 {
    color: var(--color-primary);
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;