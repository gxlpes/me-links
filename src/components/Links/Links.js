import React from "react";
import { ButtonWrapper } from "./LinksStyles";
import { ReactComponent as GitHubSVG } from "../../media/github.svg";
import { ReactComponent as LinkedInSVG } from "../../media/linkedin.svg";
import { ReactComponent as WebsiteSVG } from "../../media/website.svg";
import { ReactComponent as EmailSVG } from "../../media/email.svg";

import ReactTooltip from "react-tooltip";

const Links = () => {
  setTimeout(ReactTooltip.hide, 500);
  return (
    <>
      <a href="https://github.com/gxlpes" target="blank" style={{ textDecoration: "none" }}>
        <ButtonWrapper>
          <GitHubSVG />
          <p>GitHub</p>
        </ButtonWrapper>
      </a>

      <a href="https://www.linkedin.com/in/gxlpes/" target="blank" style={{ textDecoration: "none" }}>
        <ButtonWrapper>
          <LinkedInSVG />
          <p>LinkedIn</p>
        </ButtonWrapper>
      </a>

      <a href="https://gxlpes.is-a.dev/" target="blank" style={{ textDecoration: "none" }}>
        <ButtonWrapper>
          <WebsiteSVG />
          <p>Portifolio</p>
        </ButtonWrapper>
      </a>

      <a href data-tip="Copied!" data-event="click" data-event-off="mouseout" style={{ textDecoration: "none" }}>
        <ButtonWrapper
          data-tip="Copied!"
          data-event="click"
          data-event-off="mouseout"
          onClick={() => {
            navigator.clipboard.writeText("guilhermxlopes@gmail.com");
          }}
        >
          <EmailSVG />
          <p>Email</p>
          <ReactTooltip />
        </ButtonWrapper>
      </a>
    </>
  );
};

export default Links;