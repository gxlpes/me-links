import React from "react";
import Image from "../../media/profile.png";
import { Img, ImgWrapper } from "./ProfileStyles";

const Profile = () => {
  return (
    <ImgWrapper>
      <Img src={Image} alt="profile" />
    </ImgWrapper>
  );
};

export default Profile;
