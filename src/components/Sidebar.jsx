import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { xs: "auto", md: "95%" },
      flexDirection: { md: "column" },
      justifyContent: { xs: "space-evenly", md: "start" },
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
        }}
        key={category.name}
      >
        <span
          style={{
            color: "white",
            marginBottom: 10,
          }}
        >
          {category.name === selectedCategory
            ? category.filledIcon
            : category.icon}
        </span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
