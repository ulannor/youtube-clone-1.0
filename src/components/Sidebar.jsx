import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      flexDirection: { md: "column" },
      justifyContent: { xs: "space-around", md: "start" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          // background: category.name === selectedCategory && "#7373731f",
          color: "white",
          flexDirection: "column", // Stacks content vertically
          width: "100%",
        }}
        key={category.name}
      >
        <span
          style={{
            color: "white",
            alignContent: "center",
          }}
        >
          {category.name === selectedCategory
            ? category.filledIcon
            : category.icon}
        </span>
        <span style={{ fontWeight: "300", fontSize: "10px" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
