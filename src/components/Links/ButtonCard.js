import React from "react";

import { StyledButton } from "./ButtonCardStyles";

const ButtonCard = ({ link, name, svg }) => {
  return (
    <>
      <a href={link} target="_blank">
        <StyledButton href={link} target="blank">
          <img src={svg} />
          <p>{name}</p>
        </StyledButton>
      </a>
    </>
  );
};

export default ButtonCard;
