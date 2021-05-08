import Carpool from "@material-ui/icons/EmojiTransportation";
import Person from "@material-ui/icons/PersonAdd";
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";

// core components/views for Admin layout
import CarpoolPage from "views/Dashboard/Dashboard.js";
import PerfilUsuario from "views/PerfilUsuario/PerfilUsuario.js";
import Reservas from "views/Reservas/Reservas.js";
import Github from "views/Github/Github.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";

const CarpoolRoutes = [
  {
    path: "/carpool",
    name: "Carpool",
    icon: Carpool,
    component: CarpoolPage,
    layout: "/admin"
  },
  {
    path: "/usuario",
    name: "perfil de usuario",
    icon: Person,
    component: PerfilUsuario,
    layout: "/admin"
  },
  {
    path: "/Reservas",
    name: "Reservas",
    icon: "content_paste",
    component: Reservas,
    layout: "/admin"
  },
  {
    path: "/Mapas",
    name: "Mapas",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/Github",
    name: "Github",
    icon: GitHubIcon,
    component: Github,
    layout: "/admin"
  },
];
export default CarpoolRoutes;

