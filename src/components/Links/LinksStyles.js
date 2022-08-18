import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: 15rem;
  height: 3rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  background-color: #4c8fcd;
  color: white;
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-items: flex-start;

  p {
    width: 100%;
    text-align: center;
    margin-left: -1.5rem;
    font-size: clamp(0.2vw + 0.8rem, 0.2vw + 0.3rem, 0.2vw + 0.2rem);
  }

  svg {
    width: 1.5rem;
    fill: white;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: #7ca3c7;
  }
`;
