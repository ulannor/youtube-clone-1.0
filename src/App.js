import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  VideoAdd,
  SupabaseTest,
  LoginTest,
  VideoAddTest,
  MyPlaylists,
} from "./components";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./context/ProtectedRoute";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter>
      <AuthProvider>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />

            <Route
              path="/add"
              element={
                <ProtectedRoute>
                  <VideoAdd />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addtest"
              element={
                <ProtectedRoute>
                  <VideoAddTest />
                </ProtectedRoute>
              }
            />
            <Route
              path="/myplaylists"
              element={
                <ProtectedRoute>
                  <MyPlaylists />
                </ProtectedRoute>
              }
            />
            <Route path="/supabasetest" element={<SupabaseTest />} />
            <Route path="/logintest" element={<LoginTest />} />
          </Routes>
        </Box>
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>
);
export default App;
