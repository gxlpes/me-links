import React from "react";
import GitHubSVG from "../../media/github.svg";
import LinkedInSVG from "../../media/linkedin.svg";
import WebsiteSVG from "../../media/website.svg";
import EmailSVG from "../../media/email.svg";
import ButtonCard from "./ButtonCard";

const Links = () => {
  return (
    <>
      <ButtonCard link={"https://github.com/gxlpes"} name={"GitHub"} svg={GitHubSVG} />

      <ButtonCard link={"https://www.linkedin.com/in/gxlpes/"} name={"LinkedIn"} svg={LinkedInSVG} />

      <ButtonCard link={"https://gxlpes.netlify.app/"} name={"Portfolio"} svg={WebsiteSVG} />

      <ButtonCard link={"#guilhermxlopes@gmail.com"} name={"Email"} svg={EmailSVG} />
    </>
  );
};

export default Links;
