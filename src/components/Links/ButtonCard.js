import React from "react";

import { StyledButton } from "./ButtonCardStyles";

const ButtonCard = ({ link, name, svg }) => {
  return (
    <>
      <a href={link} target="_blank">
        <StyledButton href={link} target="_blank">
          <img src={svg} alt="logo" />
          <p>{name}</p>
        </StyledButton>
      </a>
    </>
  );
};

export default ButtonCard;
