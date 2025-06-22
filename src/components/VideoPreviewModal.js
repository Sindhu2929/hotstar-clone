import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const VideoPreviewModal = ({ video, open, handleClose }) => {
  if (!video) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="video-preview-title"
      aria-describedby="video-preview-description"
    >
      <Box sx={style}>
        <Typography id="video-preview-title" variant="h6" component="h2">
          {video.title}
        </Typography>
        <Typography id="video-preview-description" sx={{ mt: 2 }}>
          {video.description}
        </Typography>
        <Button onClick={handleClose} sx={{ mt: 2 }}>Close</Button>
      </Box>
    </Modal>
  );
};

export default VideoPreviewModal;
