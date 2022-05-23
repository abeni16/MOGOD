import React from "react";
import styled from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
const Button = styled.button`
  border: none;
  display: flex;
  margin: 0 6px;
  padding: 6px;
  border-radius: 50%;

  box-shadow: inset 6px 6px 12px rgb(0, 0, 0, 0.6);
`;

const PlayerControls = () => {
  return (
    <Container>
      <Button>
        <SkipPreviousIcon />
      </Button>
      <Button>
        <PlayArrowIcon />
      </Button>
      <Button>
        <SkipNextIcon />
      </Button>
    </Container>
  );
};

export default PlayerControls;
