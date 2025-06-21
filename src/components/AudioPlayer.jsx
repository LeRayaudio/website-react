import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import {
  PlayArrow,
  Pause,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";

export default function AudioPlayer({ tracks, logo }) {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const playTrack = (index) => {
    if (index === currentTrack) {
      togglePlay();
    } else {
      setCurrentTrack(index);
      setIsPlaying(true);
      setTimeout(() => audioRef.current.play(), 100);
    }
  };

  const handleSeek = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    const newTime = percent * duration;
    audioRef.current.currentTime = newTime;
  };

  useEffect(() => {
    if (!isPlaying) return;
    const audio = audioRef.current;
    audio.play();
  }, [currentTrack]);

  return (
    <Paper
      sx={{
        maxWidth: "100%",
        margin: "auto",
        p: 3,
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: 2,
        mb: 2,
      }}
      elevation={8}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{ width: 150, height: 150, borderRadius: "50%" }}
        />
        <Box flexGrow={1}>
          <Typography fontWeight="bold" fontSize={18}>
            {tracks[currentTrack].title}
          </Typography>
          <Typography fontSize={15}>{tracks[currentTrack].artist}</Typography>
          <Typography fontSize={14} color="gray">
            {tracks[currentTrack].otherInfo}
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center" >
            <IconButton
              onClick={() =>
                playTrack((currentTrack - 1 + tracks.length) % tracks.length)
              }
              color="inherit"
            >
              <SkipPrevious />
            </IconButton>
            <IconButton onClick={togglePlay} color="inherit">
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton
              onClick={() => playTrack((currentTrack + 1) % tracks.length)}
              color="inherit"
            >
              <SkipNext />
            </IconButton>
            <Typography variant="caption">
              {formatTime(currentTime)} / {formatTime(duration)}
            </Typography>
          </Stack>

          <Box
            mt={0.3}
            height={7}
            sx={{
              backgroundColor: "#5c2f00",
              borderRadius: 2,
              cursor: "pointer",
              position: "relative",
            }}
            onClick={handleSeek}
          >
            <Box
              sx={{
                height: "100%",
                width: `${progress}%`,
                backgroundColor: "#f44336",
                borderRadius: 2,
                transition: "width 0.2s",
              }}
            />
          </Box>

          <audio
            ref={audioRef}
            src={tracks[currentTrack].src}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => playTrack((currentTrack + 1) % tracks.length)}
          />
        </Box>
      </Stack>

      <Divider sx={{ mt: 2, mb: 1, borderColor: "#333" }} />

      <List dense sx={{ width: "100%", bgcolor: "transparent" }}>
        {tracks.map((track, index) => {
          const isCurrent = currentTrack === index;
          const isTrackPlaying = isCurrent && isPlaying;

          return (
            <ListItem
              key={index}
              button
              onClick={() => playTrack(index)}
              sx={{
                color: isCurrent ? "#f44336" : "#fff",
                borderBottom: "1px solid #222",
                py: 0.25,
              }}
            >
              <ListItemIcon
                sx={{ color: isCurrent ? "#f44336" : "#fff", minWidth: 36 }}
              >
                {isTrackPlaying ? <Pause /> : <PlayArrow />}
              </ListItemIcon>
              <ListItemText
                primary={track.title}
                primaryTypographyProps={{
                  fontSize: 14,
                }}
              />
              <Typography
                variant="caption"
                color={isCurrent ? "error" : "gray"}
              >
                {track.duration}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}
