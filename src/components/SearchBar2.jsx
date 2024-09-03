import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.down("sm")]: {
    backgroundColor: alpha(theme.palette.common.white, 0),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0),
    },
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `1em`, // vertical padding + font size from searchIcon
  },
}));

export default function SearchAppBar({ onFocus, onBlur, onBack, isFocused, onClick }) {
  return (
    <Search>
      {isFocused && (
        <IconButton onClick={onBack} aria-label="back" sx={{ pr: "0" }}>
          <ArrowBackIcon />
        </IconButton>
      )}
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onFocus={onFocus}
        onBlur={onBlur}
        sx={{ p: "0" }}
      />
      <IconButton disableRipple aria-label="search" sx={{ pr: "12px" }} onClick={onClick}>
        <SearchIcon />
      </IconButton>
    </Search>
  );
}
