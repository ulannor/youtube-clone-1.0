import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar2 from "./SearchBar2";
import useScrollDirection from "../utils/useScrollDirection";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const scrollDirection = useScrollDirection();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Stack
      direction="row"
      alignItems="center"
      height="55px"
      pt={0.5}
      pb={0.5}
      pl={{ sm: 2.5, xs: isFocused ? 0.5 : 1.5 }}
      pr={{ sm: 2.5, xs: isFocused ? 0.5 : 1.5 }}
      sx={{
        position: "fixed",
        backgroundColor: "background.default",
        width: "100%",
        top: "0",
        alignItems: "center",
        justifyContent: "space-between",
        transform:
          isSmallScreen && scrollDirection === "down"
            ? "translateY(-100%)"
            : "translateY(0)",
        transition:
          "transform 0.3s ease-in-out, padding-left 0.3s ease-in-out, padding-right 0.3s ease-in-out",
        zIndex: 1100,
      }}
    >
      <Box
        sx={{
          display: isSmallScreen && isFocused ? "none" : "flex",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ width: 36, height: 36 }} />
        </Link>
      </Box>
      <Box
        maxWidth="736px"
        flex={
          isSmallScreen ? (isFocused ? "1 1 auto" : "0 1 736px") : "1 1 736px"
        }
        pr={isSmallScreen && isFocused ? 0 : 1}
        pl={isSmallScreen && isFocused ? 0 : 1}
        sx={{
          transition: "flex-grow 0.3s ease-in-out",
          width: isSmallScreen && isFocused ? "100%" : "auto",
          backgroundColor:
            isSmallScreen && isFocused
              ? theme.palette.background.paper
              : "inherit",
          zIndex: isSmallScreen && isFocused ? 1200 : "inherit",
        }}
      >
        <SearchBar2
          onFocus={handleFocus}
          onBlur={handleBlur}
          onBack={() => setIsFocused(false)}
          isFocused={isFocused}
        />
      </Box>
      <Box
        sx={{
          display: isSmallScreen && isFocused ? "none" : "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ width: 36, height: 36 }} />
        </Link>
      </Box>
    </Stack>
  );
};

export default Navbar;
