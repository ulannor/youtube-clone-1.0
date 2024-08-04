import { useState, useEffect } from "react";
import { supabase } from '../utils/supabaseClient';
import { Select, MenuItem, FormControl, InputLabel, TextField, Button, Box } from "@mui/material";

const PlaylistSelect = ({ userId, onChange }) => {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");

  useEffect(() => {
    const fetchPlaylists = async () => {
      const { data, error } = await supabase
        .from('playlists')
        .select('playlist_id, playlist_name')
        .eq('user_id', userId); // Fetch playlists for the authenticated user
      if (error) {
        console.error('Error fetching playlists:', error);
      } else {
        setPlaylists(data);
      }
    };

    fetchPlaylists();
  }, [userId]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === "create_new") {
      setIsCreatingNew(true);
    } else {
      setSelectedPlaylist(value);
      setIsCreatingNew(false);
      onChange(value);
    }
  };

  const handleCreateNewPlaylist = async () => {
    if (newPlaylistName) {
      const { data, error } = await supabase
        .from('playlists')
        .insert([{ playlist_name: newPlaylistName, user_id: userId }])
        .select('playlist_id, playlist_name')
        .single();

      if (error) {
        console.error('Error creating new playlist:', error);
      } else {
        setPlaylists([...playlists, data]);
        setSelectedPlaylist(data.playlist_id);
        setNewPlaylistName("");
        setIsCreatingNew(false);
        onChange(data.playlist_id);
      }
    }
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="playlist-select-label">Select Playlist</InputLabel>
        <Select
          labelId="playlist-select-label"
          value={selectedPlaylist}
          onChange={handleChange}
        >
          {playlists.map((playlist) => (
            <MenuItem key={playlist.playlist_id} value={playlist.playlist_id}>
              {playlist.playlist_name}
            </MenuItem>
          ))}
          <MenuItem value="create_new">Create New Playlist</MenuItem>
        </Select>
      </FormControl>

      {isCreatingNew && (
        <Box mt={2}>
          <TextField
            label="New Playlist Name"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateNewPlaylist}
            sx={{ mt: 2 }}
          >
            Create Playlist
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PlaylistSelect;
