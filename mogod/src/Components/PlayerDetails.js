import React from "react";
import styled from "styled-components";
import imageurl from "../Image/photo_2022-05-21_21-47-02.jpg";

const Container = styled.div`
  position: relative;
  margin: 12px auto;
`;
const ImageContainer = styled.div`
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: inset 6px 6px 12px rgb(0, 0, 0, 0.6);
`;
const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
`;
const Title = styled.h3`
  color: #000;
  font-size: 24px;
  text-shadow: 6px 6px 12px rgb(0, 0, 0, 0.6);
  align-items: center;
  margin-bottom: 6px;
`;
const ArtistTitle = styled.h4`
  color: #555;
  font-size: 12px;
  text-shadow: 6px 6px 12px rgb(0, 0, 0, 0.6);
  align-items: center;
  margin-bottom: 6px;
`;

const PlayerDetails = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={imageurl}></Image>
      </ImageContainer>
      <Title>Lambadina</Title>
      <ArtistTitle>Teddy Afro</ArtistTitle>
    </Container>
  );
};

export default PlayerDetails;
