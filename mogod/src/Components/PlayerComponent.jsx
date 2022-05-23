import React from "react";
import styled from "styled-components";
import PlayerControls from "./PlayerControls";
import PlayerDetails from "./PlayerDetails";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: #dfdfdfdf;
  padding: 50px;
  border-radius: 16px;
  box-shadow: 6px 6px 12px #ffffff83;
`;
const Audio = styled.audio``;
const Heading = styled.h4`
  color: #111;
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
`;
const Text = styled.p`
  color: #444;
  font-size: 12px;
  text-align: center;
  font-weight: 400;
`;

const PlayerComponent = () => {
  return (
    <Container>
      <Audio></Audio>
      <Heading>Playing Now</Heading>
      <PlayerDetails />
      <PlayerControls />
      <Text>
        <strong>Next up:</strong> Tikur sew
      </Text>
    </Container>
  );
};

export default PlayerComponent;
