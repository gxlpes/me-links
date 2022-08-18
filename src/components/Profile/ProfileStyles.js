import styled from "styled-components";

export const Img = styled.img`
  width: 15rem;
  height: auto;
  border-radius: 5px;
  margin: 0;
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  color: #3f3f3f;

  h1 {
    padding: 0;
    margin: 0;
    margin-top: -1rem;
    font-size: clamp(0.2vw + 0.5rem, 0.2vw + 1.8rem, 1.8rem);
  }

  p {
    padding: 0;
    margin: 0;
    margin-bottom: -1rem;
    font-size: clamp(0.2vw + 0.5rem, 0.2vw + 1.2rem, 1.2rem);
  }
`;

export const ImgWrapper = styled.div`
  width: min-content;
  padding: 0.5rem;
  background: linear-gradient(90deg, #7ca3c7 50%, transparent 50%), linear-gradient(90deg, #7ca3c7 50%, transparent 50%),
    linear-gradient(0deg, #7ca3c7 50%, transparent 50%), linear-gradient(0deg, #7ca3c7 50%, transparent 50%);
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 15px 4px, 15px 4px, 4px 15px, 4px 15px;
  animation: border-dance 10s infinite linear;

  @keyframes border-dance {
    0% {
      background-position: 0 0, 100% 100%, 0 100%, 100% 0;
    }
    100% {
      background-position: 100% 0, 0 100%, 0 0, 100% 100%;
    }
  }
`;
