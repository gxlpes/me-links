import React from "react";
import { ReactDOM } from "react";
import { Button, ButtonWrapper } from "./LinksStyles";
import GitHubSVG from "../../media/github.svg";
import LinkedInSVG from "../../media/linkedin.svg";
import WebsiteSVG from "../../media/website.svg";
import EmailSVG from "../../media/email.svg";
import { StyledButton } from "./ButtonCardStyles";
import ButtonCard from "./ButtonCard";

import ReactTooltip from "react-tooltip";

const Links = () => {
  return (
    <>
      <ButtonCard link={"https://github.com/gxlpes"} name={"GitHub"} svg={GitHubSVG} />

      <ButtonCard link={"https://www.linkedin.com/in/gxlpes/"} name={"LinkedIn"} svg={LinkedInSVG} />

      <ButtonCard link={"https://gxlpes.is-a.dev/"} name={"Portfolio"} svg={WebsiteSVG} />

      <ButtonCard link={"mailto: guilhermxlopes@gmail.com"} name={"Email"} svg={EmailSVG} />
    </>
  );
};

export default Links;
