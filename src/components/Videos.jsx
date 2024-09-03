import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./";
import { demoThumbnailUrl } from "../utils/constants";
import Grid from "@mui/material/Grid";

const generatePlaceholderVideos = (count) => {
  return Array.from({ length: count }, (_, idx) => ({
    id: { videoId: `placeholder-${idx}` },
    snippet: {
      title:
        "Placeholder Video Title Placeholder Video Title  Placeholder Video Title  Placeholder Video Title  Placeholder Video Title  Placeholder Video Title  Placeholder Video Title",
      channelId: "placeholder-channel-id",
      channelTitle: "Placeholder Channel Title",
      thumbnails: {
        high: {
          url: "https://i.ytimg.com/vi/hd1aZZy43EU/maxresdefault.jpg",
        },
      },
    },
  }));
};

const Videos = ({ videos = [], direction }) => {
  const placeholderVideos = generatePlaceholderVideos(10);

  // const videoData = videos.length > 0 ? videos : placeholderVideos;
  const videoData = placeholderVideos;

  return (
    <Box>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {videoData.map((item, idx) =>
          item.id.videoId || item.id.channelId ? (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
              </Box>
            </Grid>
          ) : null
        )}
      </Grid>
    </Box>
  );
};

export default Videos;
