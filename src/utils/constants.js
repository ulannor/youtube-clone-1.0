import HomeIcon from "@mui/icons-material/HomeOutlined";
import HomeFilledIcon from "@mui/icons-material/Home";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircle";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import VideoLibraryFilledIcon from "@mui/icons-material/VideoLibrary";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SubscriptionsFilledIcon from "@mui/icons-material/Subscriptions";

export const logo = "/logo192.png";

export const categories = [
  {
    name: "All",
    icon: <HomeIcon sx={{ fontSize: 30 }} />,
    filledIcon: <HomeFilledIcon sx={{ fontSize: 30 }} />,
  },
  {
    name: "Session",
    icon: <PlayCircleOutlinedIcon sx={{ fontSize: 30 }} />,
    filledIcon: <PlayCircleFilledIcon sx={{ fontSize: 30 }} />,
  },
  {
    name: "My Feed",
    icon: <VideoLibraryOutlinedIcon sx={{ fontSize: 30 }} />,
    filledIcon: <VideoLibraryFilledIcon sx={{ fontSize: 30 }} />,
  },
  {
    name: "Playlists",
    icon: <SubscriptionsOutlinedIcon sx={{ fontSize: 30 }} />,
    filledIcon: <SubscriptionsFilledIcon sx={{ fontSize: 30 }} />,
  },
];

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "JavaScript Mastery";
export const demoVideoTitle =
  "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";
