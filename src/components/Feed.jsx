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
          position: { xs: "fixed", md: "relative" },
          bottom: { xs: 0, md: "auto" },
          width: { xs: "100%", md: 100 },
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
          height: { xs: "calc(100vh - 60px)", md: "90vh" },
          px: { sm: 1 },
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {/* <Typography
          variant="h5"
          fontWeight="bold"
          m={1}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography> */}

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
