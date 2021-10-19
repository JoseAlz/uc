import "./App.css";
import { useState } from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Slider, Grid } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";

import uc from "./assets/image/uc16.svg";

const useStyles = makeStyles({
  root: {
    width: "300",
    height: "300",
  },
  largeIcon: {
    fontSize: "3em",
  },
});

function App() {
  const classes = useStyles();

  const url = "https://stream.zeno.fm/nenvh2ut97zuv";

  const [radio, setRadio] = useState({ play: false, volume: 0.5, mute: false });

  const handlePlay = () => {
    setRadio({ ...radio, play: !radio.play });
  };

  const handleVolume = (event, newValue) => {
    setRadio({ ...radio, volume: newValue });
  };

  const handleMute = () => {
    setRadio({ ...radio, mute: !radio.mute });
  };

  return (
    <div className="container">
      <h1>Uculturemix Radio</h1>
      <p>Buenos Aires Argentina</p>
      <img className="uc" src={uc} alt="uculturemix radio" />

      <div className={classes.root}>
        {radio.play ? (
          <>
            <IconButton color="secondary" onClick={handlePlay}>
              <StopIcon className={classes.largeIcon} />
            </IconButton>

            <IconButton color="primary" onClick={handleMute}>
              {radio.mute ? <VolumeOffIcon /> : <VolumeUpIcon />}
            </IconButton>
          </>
        ) : (
          <IconButton color="primary" onClick={handlePlay}>
            <PlayArrowIcon className={classes.largeIcon} />
          </IconButton>
        )}

        <Grid container spacing={2}>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider
              value={radio.volume}
              onChange={handleVolume}
              step={0.1}
              min={0}
              max={1}
            />
          </Grid>
          <Grid item>
            <VolumeUpIcon />
          </Grid>
        </Grid>

        <ReactPlayer
          className="react-player"
          url={url}
          playing={radio.play}
          volume={radio.volume}
          muted={radio.mute}
        />
      </div>
    </div>
  );
}

export default App;
