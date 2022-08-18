import React from "react";
import { ButtonWrapper } from "./LinksStyles";
import { ReactComponent as GitHubSVG } from "../../media/github.svg";
import { ReactComponent as LinkedInSVG } from "../../media/linkedin.svg";
import { ReactComponent as WebsiteSVG } from "../../media/website.svg";
import { ReactComponent as EmailSVG } from "../../media/email.svg";

const Links = () => {
  return (
    <>
      <ButtonWrapper>
        <GitHubSVG />
        <p>GitHub</p>
      </ButtonWrapper>
      <ButtonWrapper>
        <LinkedInSVG />
        <p>LinkedIn</p>
      </ButtonWrapper>
      <ButtonWrapper>
        <WebsiteSVG />
        <p>Portifólio</p>
      </ButtonWrapper>
      <ButtonWrapper>
        <EmailSVG />
        <p>Email</p>
      </ButtonWrapper>
    </>
  );
};

export default Links;
