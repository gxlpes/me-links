import styled from "styled-components";

export const Card = styled.div`
  margin-top: 2rem;
  width: 15rem;
  background-color: #f6f7f9;
  border-radius: 5px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 2rem;
  margin-inline: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  animation: appear 0.4s ease-in-out;

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
