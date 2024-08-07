import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "fixed",
      backgroundColor: "background.default",
      width: "100%",
      top: "0",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="Logo" style={{ width: 48, height: 48 }} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
