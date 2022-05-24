import React from "react";
import styled from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Pause } from "@mui/icons-material";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12pxpx;
`;
const Button = styled.button`
  border: none;
  display: flex;
  margin: 0 3px;
  padding: 3px;
  border-radius: 50%;
  background-color: orange;
  box-shadow: inset 6px 6px 12px rgb(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    transform: scale(1.03);
    :active {
      background-color: #fff;
      color: #111;
    }
  }
`;
const MainButton = styled.button`
  border: none;
  display: flex;
  margin: 0 3px;
  padding: 4px;
  border-radius: 50%;
  background-color: #ffcc33;
  box-shadow: inset 6px 6px 12px rgb(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 6px;
  :hover {
    transform: scale(1.03);
  }
  :active {
    background-color: #fff;
    color: #111;
  }
`;

const PlayerControls = (props) => {
  return (
    <Container>
      <Button onClick={() => props.SkipSong(false)}>
        <SkipPreviousIcon />
      </Button>
      <MainButton onClick={() => props.setIsPlaying(!props.isPlaying)}>
        {props.isPlaying ? <Pause /> : <PlayArrowIcon />}
      </MainButton>
      <Button onClick={() => props.SkipSong()}>
        <SkipNextIcon />
      </Button>
    </Container>
  );
};

export default PlayerControls;
