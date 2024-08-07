import HomeIcon from "@mui/icons-material/HomeOutlined";
import HomeFilledIcon from "@mui/icons-material/Home";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircle";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import VideoLibraryFilledIcon from "@mui/icons-material/VideoLibrary";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SubscriptionsFilledIcon from "@mui/icons-material/Subscriptions";

const iconFontSize = 24;

export const logo = "/youtube_logo_256.png";

export const categories = [
  {
    name: "Home",
    icon: <HomeIcon sx={{ fontSize: iconFontSize }} />,
    filledIcon: <HomeFilledIcon sx={{ fontSize: iconFontSize }} />,
  },
  {
    name: "Session",
    icon: <PlayCircleOutlinedIcon sx={{ fontSize: iconFontSize }} />,
    filledIcon: <PlayCircleFilledIcon sx={{ fontSize: iconFontSize }} />,
  },
  {
    name: "My Feed",
    icon: <VideoLibraryOutlinedIcon sx={{ fontSize: iconFontSize }} />,
    filledIcon: <VideoLibraryFilledIcon sx={{ fontSize: iconFontSize }} />,
  },
  {
    name: "Playlists",
    icon: <SubscriptionsOutlinedIcon sx={{ fontSize: iconFontSize }} />,
    filledIcon: <SubscriptionsFilledIcon sx={{ fontSize: iconFontSize }} />,
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
