import React from "react";
import { Box, Typography } from "@mui/material";
import VideoCard from "./VideoCard";

const VideoCarousel = ({ title, videos, onCardClick }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>{title}</Typography>
      <Box sx={{ display: "flex", overflowX: "auto", p: 1 }}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onClick={onCardClick} />
        ))}
      </Box>
    </Box>
  );
};

export default VideoCarousel;
