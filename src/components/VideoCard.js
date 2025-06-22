import React, { useState } from "react";
import { Card, CardMedia } from "@mui/material";

const VideoCard = ({ video, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      sx={{ 
        maxWidth: 200, 
        margin: 1,
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(video)}
    >
      <CardMedia
        component="img"
        height="300"
        image={video.posterUrl}
        alt={video.title}
      />
    </Card>
  );
};

export default VideoCard;
