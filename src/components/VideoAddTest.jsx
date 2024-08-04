import { useState, useEffect } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import {
  Box,
  Typography,
  TextField,
  Stack,
  Button,
  Card,
  CardContent,
  Link,
  Container,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromAPI } from "../utils/fetchFromAPI"; 
import { supabase } from '../utils/supabaseClient'; 
import { PlaylistSelectTest } from ".";
import { useAuth } from '../context/AuthContext'; // Import Auth context

const AddVideos = () => {
  const { user } = useAuth(); // Get user from context
  const [videoUrl, setVideoUrl] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const publishedDate = videoData ? new Date(videoData.snippet.publishedAt) : null;
  const relativeTime = videoData ? formatDistanceToNowStrict(publishedDate, { addSuffix: true }) : null;

  const formatViewCount = (viewCount) => {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + " million";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(0) + " thousand";
    }
    return viewCount.toLocaleString();
  };

  const handleFetchVideoData = async () => {
    if (videoUrl) {
      const videoId = new URL(videoUrl).searchParams.get("v");
      if (videoId) {
        try {
          const data = await fetchFromAPI(
            `videos?part=snippet,contentDetails,statistics&id=${videoId}`
          );
          setVideoData(data.items[0]);
          console.log(data);
        } catch (error) {
          console.error("Error fetching video data:", error);
        }
      } else {
        alert("Invalid YouTube URL");
      }
    } else {
      alert("Please enter a YouTube URL");
    }
  };

  const handleAddVideo = async () => {
    if (videoData && selectedPlaylist && user) {
      const { error } = await supabase.from('videos').insert([
        {
          video_details: videoData,
          youtube_video_id: videoData.id,
          title: videoData.snippet.title,
          description: videoData.snippet.description,
          channel_id: videoData.snippet.channelId,
          channel_title: videoData.snippet.channelTitle,
          published_at: videoData.snippet.publishedAt,
          thumbnail_url_maxres: videoData.snippet.thumbnails.maxres?.url || videoData.snippet.thumbnails.high.url,
          view_count: parseInt(videoData.statistics.viewCount, 10),
          like_count: parseInt(videoData.statistics.likeCount, 10),
          user_id: user.id, // Use the authenticated user's ID
          playlist_id: selectedPlaylist
        }
      ]);

      if (error) {
        console.error('Error inserting video data:', error);
      } else {
        console.log('Video data inserted successfully');
        setVideoData(null);
        setVideoUrl("");
      }
    }
  };

  return (
    <Container>
      <Box overflow={"auto"} pt={4} pb={4} pr={1} pl={1} height={"90vh"}>
        <Stack direction="column" spacing={2} alignItems={"center"}>
          <Typography
            variant="h1"
            fontWeight="bold"
            fontSize={"2rem"}
            color={"white"}
          >
            Add videos to a playlist
          </Typography>
          <TextField
            id="pasteUrl"
            label="YouTube URL"
            placeholder="Add YouTube video link here"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            fullWidth
            sx={{ maxWidth: "450px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleFetchVideoData}
          >
            Fetch Video
          </Button>
          {videoData && (
            <Card sx={{ maxWidth: "1200px" }}>
              <CardContent>
                <Stack direction={{ sx: "column", md: "row" }} spacing={2}>
                  <Box>
                    <img
                      src={videoData.snippet.thumbnails.maxres?.url || videoData.snippet.thumbnails.high.url}
                      alt={videoData.snippet.title}
                      style={{ maxWidth: "500px", borderRadius: "8px" }}
                    />
                  </Box>
                  <Box pt={0.5}>
                    <Typography variant="h3" mb={1} fontSize={"1.3rem"}>
                      <Link href="#" underline="none" color={"inherit"}>
                        {videoData.snippet.title}
                      </Link>
                    </Typography>
                    <Typography variant="subtitle1" mb={0.5}>
                      <Link href="#" underline="none" color={"inherit"}>
                        {videoData.snippet.channelTitle}
                      </Link>{" "}
                      <CheckCircle sx={{ fontSize: "12px", color: "gray" }} />
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {relativeTime} <span style={{ margin: "0 5px" }}>•</span>{" "}
                      {formatViewCount(videoData.statistics.likeCount)} likes{" "}
                      <span style={{ margin: "0 5px" }}>•</span>{" "}
                      {formatViewCount(videoData.statistics.viewCount)} views
                    </Typography>
                    <PlaylistSelectTest userId={user.id} onChange={setSelectedPlaylist} />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleAddVideo}
                    >
                      Add to Playlist
                    </Button>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export default AddVideos;
