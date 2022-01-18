import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AirplayIcon from "@mui/icons-material/Airplay";
import AlbumIcon from "@mui/icons-material/Album";

export const primaryColor = "rgb(113, 1, 147)";
export const primaryColorLight = "rgb(238, 130, 238)";
export const primaryColorDark = "rgb(49, 20, 50)";

export const sidebarItems = [
  { icon: DashboardOutlinedIcon, title: "Dashboard", route: "/" },
  { icon: BookOutlinedIcon, title: "News", route: "/news" },
];

export const stats = [
  { count: 100, title: "Users", icon: AccountBoxIcon },
  { count: 1540, title: "Delivered", icon: AccessTimeFilledIcon },
  { count: 75, title: "Transport", icon: AirplayIcon },
  { count: 304, title: "Products", icon: AlbumIcon },
];
