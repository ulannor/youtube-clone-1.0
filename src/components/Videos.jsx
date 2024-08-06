import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./";
import { demoThumbnailUrl } from "../utils/constants";

const generatePlaceholderVideos = (count) => {
  return Array.from({ length: count }, (_, idx) => ({
    id: { videoId: `placeholder-${idx}` },
    snippet: {
      title: "Placeholder Video Title",
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
  const placeholderVideos = generatePlaceholderVideos(200);

  // const videoData = videos.length > 0 ? videos : placeholderVideos;
  const videoData = placeholderVideos;

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      pb={12}
    >
      {videoData.map((item, idx) =>
        item.id.videoId || item.id.channelId ? (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ) : null
      )}
    </Stack>
  );
};

export default Videos;
