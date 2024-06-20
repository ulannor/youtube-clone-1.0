import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Stack,
  Button,
  Card,
  CardContent,
  Chip,
  CardMedia,
  Paper,
  ListItem,
} from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI"; // Ensure you have a utility to fetch data from the API

const AddVideos = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoData, setVideoData] = useState(null);

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
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Box
      width="100vw"
      height="90vh"
      display="flex"
      justifyContent={"center"}
      alignContent={"center"}
      overflow={"auto"}
    >
      <Stack direction="column" spacing={2} alignItems="center">
        <Box width={"500px"}>
          <Stack direction="column" spacing={2} alignItems="center">
            <Typography
              variant="h1"
              fontWeight="bold"
              mb={2}
              sx={{ color: "white", fontSize: "2rem" }}
              gutterBottom={true}
            >
              Add videos to your playlist
            </Typography>
            <TextField
              fullWidth
              id="fullWidth"
              sx={{
                backgroundColor: "white",
                borderColor: "black",
                borderRadius: 1,
              }}
              placeholder="Add YouTube video link here"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              size="small"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleFetchVideoData}
            >
              Fetch Video Data
            </Button>
          </Stack>
        </Box>
        <Box width={"40%"}>
          {videoData && (
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Typography variant="h5" mb={1}>
                  {videoData.snippet.title}
                </Typography>
                <img
                  src={videoData.snippet.thumbnails.maxres.url}
                  alt={videoData.snippet.title}
                  style={{ width: "50%", borderRadius: "8px" }}
                />
                <Typography variant="body2">
                  {videoData.snippet.description}
                </Typography>

                <Typography variant="subtitle2" color="textSecondary">
                  Published at:{" "}
                  {new Date(videoData.snippet.publishedAt).toLocaleDateString()}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Channel:{" "}
                  <span style={{ color: "primary.main" }}>
                    {videoData.snippet.channelTitle}
                  </span>
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Views: {videoData.statistics.viewCount}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Likes: {videoData.statistics.likeCount}
                </Typography>
                <Paper
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    listStyle: "none",
                    p: 1,
                  }}
                  component="ul"
                >
                  {videoData.snippet.tags &&
                    videoData.snippet.tags.map((tag) => (
                      <ListItem
                        key={tag}
                        sx={{ width: "auto", mb: 1 }}
                        disablePadding
                      >
                        <Chip onDelete={handleDelete} label={tag} />
                      </ListItem>
                    ))}
                </Paper>
              </CardContent>
            </Card>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default AddVideos;
