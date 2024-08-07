import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    display="flex"
    height="55px"
    pt={1}
    pb={1}
    pl={3.5}
    pr={3.5}
    sx={{
      position: "fixed",
      backgroundColor: "background.default",
      width: "100%",
      top: "0",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Box>
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="Logo" style={{ width: 36, height: 36 }} />
      </Link>
    </Box>
    <Box minWidth={0} flex={"0 1 736px"} pr={2} pl={2}>
      <SearchBar />
    </Box>
    <Box>
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "flex-end",
        }}
      >
        <img src={logo} alt="Logo" style={{ width: 36, height: 36 }} />
      </Link>
    </Box>
  </Stack>
);

export default Navbar;
