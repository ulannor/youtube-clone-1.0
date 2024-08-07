import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Paper,
  Box,
} from "@mui/material";

import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        boxShadow: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Box
          component="img"
          sx={{
            height: "100%",
            width: "100%",
          }}
          alt={snippet?.title}
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          borderRadius={1}
        />
      </Link>
      <Paper elevation={0}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#FFF"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {snippet?.title || demoVideoTitle}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </Paper>
    </Box>
  );
};

export default VideoCard;
