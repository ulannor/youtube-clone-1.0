import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { useAuth } from "../context/AuthContext";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
} from "@mui/material";

const MyPlaylists = () => {
  const { user } = useAuth();
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylists = async () => {
      if (user) {
        const { data, error } = await supabase
          .from("playlists")
          .select(
            "playlist_id, playlist_name, videos (youtube_video_id, title, thumbnail_url_maxres)"
          )
          .eq("user_id", user.id);

        if (error) {
          console.error("Error fetching playlists:", error);
        } else {
          setPlaylists(data);
        }
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, [user]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box>
      <Typography variant="h2">My Playlists</Typography>
      {playlists.length === 0 ? (
        <Typography>No playlists found.</Typography>
      ) : (
        playlists.map((playlist) => (
          <Card key={playlist.playlist_id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5">{playlist.playlist_name}</Typography>
              <List>
                {playlist.videos.map((video) => (
                  <ListItem key={video.youtube_video_id}>
                    <img
                      src={video.thumbnail_url_maxres}
                      alt={video.title}
                      style={{ width: "120px", marginRight: "16px" }}
                    />
                    <ListItemText primary={video.title} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default MyPlaylists;
