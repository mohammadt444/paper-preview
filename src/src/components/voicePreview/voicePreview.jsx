import * as storage from "@web-lite/storage";
import { Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState, useRef } from "react";
import { getCounterDigit, getDecimalSize } from "./voicePreview.helper";
import CustomSlider from "./components/slider/slider";
import pause from "../../assests/svgs/pause.svg";
import play from "../../assests/svgs/play.svg";
// style
import useStyle from "./voicePreview.style";
// localization
import t from "./voicePreview.local";

function VoicePreview({ fileId }) {
  const audioRef = useRef();
  const classes = useStyle();
  const [url, setUrl] = useState();
  const [size, setSize] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const loadData = () => {
    setAudioDuration(audioRef.current.duration);
    setCurrentTime(audioRef.current.currentTime);
  };

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  useEffect(() => {
    storage
      .getInfo(fileId)
      .then(({ size, directLink }) => {
        setUrl(directLink);
        setSize(size);
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.load();
        }
      })
      .catch((err) => {
        console.log("error");
      });
  }, [fileId]);
  return (
    <Paper elevation={0} className={classes.root}>
      <div className={classes.wrapper}>
        <Typography className={classes.text}>{t.audioFile}</Typography>
        <Typography className={classes.size}>{getDecimalSize(size)}</Typography>
        <div className={classes.recordWrapper}>
          <Typography className={classes.progress}>
            {getCounterDigit(currentTime)}
          </Typography>
          <div style={{ display: "flex" }}>
            {isPlaying ? (
              <img
                onClick={() => {
                  setIsPlaying(false);
                  audioRef.current.pause();
                }}
                className={classes.playIcon}
                alt="pause"
                src={pause}
              />
            ) : (
              <img
                onClick={() => {
                  setIsPlaying(true);
                  audioRef.current.play();
                  audioRef.current.volume = 1;
                }}
                className={classes.playIcon}
                alt="play"
                src={play}
              />
            )}
          </div>
        </div>
        <audio
          onLoadedData={loadData}
          onTimeUpdate={updateTime}
          onPause={() => setIsPlaying(false)}
          ref={audioRef}
          src={url}
        />
        <CustomSlider
          max={audioDuration}
          value={currentTime}
          onChangeCommitted={(_, value) => {
            audioRef.current.currentTime = value;
          }}
        />
      </div>
    </Paper>
  );
}

export default VoicePreview;
