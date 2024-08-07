import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, Videos } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", sm: "row" } }}>
      <Box
        sx={{
          px: { xs: 0, md: 1 },
          position: "fixed",
          left: { xs: "auto", md: 0 },
          bottom: { xs: 0, md: "auto" },
          width: { xs: "100%", md: "90px" },
          bgcolor: { xs: "background.default", md: "transparent" },
          borderTop: { xs: 0.5, md: "none" },
          borderColor: { xs: "grey.800" },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          px: { sm: 1 },
          justifyContent: "center",
          alignContent: "center",
          ml: { xs: 0, md: "90px" },
        }}
      >
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
