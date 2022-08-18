import React from "react";
import Image from "../../media/profile.png";
import { Img, ImgWrapper, ProfileText } from "./ProfileStyles";

const Profile = () => {
  return (
    <>
      <ImgWrapper>
        <Img src={Image} alt="profile" />
      </ImgWrapper>
      <ProfileText>
        <h1>Guilherme Lopes</h1>
        <p>Web Dev Student</p>
      </ProfileText>
    </>
  );
};

export default Profile;
