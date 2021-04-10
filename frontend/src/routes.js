import Carpool from "@material-ui/icons/EmojiTransportation";
import Person from "@material-ui/icons/PersonAdd";
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Calculator from '@material-ui/icons/Dialpad';

// core components/views for Admin layout
import CarpoolPage from "views/Dashboard/Dashboard.js";
import PerfilUsuario from "views/PerfilUsuario/PerfilUsuario.js";
import Reservas from "views/Reservas/Reservas.js";
import Github from "views/Github/Github.js";
import Calculadora1 from "views/Calculadora/Calculadora.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const CarpoolRoutes = [
  {
    path: "/Carpool",
    name: "Carpool",
    rtlName: "",
    icon: Carpool,
    component: CarpoolPage,
    layout: "/admin"
  },
  {
    path: "/Sesion",
    name: "Login",
    rtlName: "",
    icon: Calculator,
    component: Calculadora1,
    layout: "/admin"
  },  
  {
    path: "/Registro",
    name: "Registro",
    rtlName: "",
    icon: Calculator,
    component: Calculadora1,
    layout: "/admin"
  },
  {
    path: "/usuario",
    name: "perfil de usuario",
    rtlName: "",
    icon: Person,
    component: PerfilUsuario,
    layout: "/admin"
  },
  {
    path: "/Reservas",
    name: "Reservas",
    rtlName: "",
    icon: "content_paste",
    component: Reservas,
    layout: "/admin"
  },
  {
    path: "/Mapas",
    name: "Mapas",
    rtlName: "",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/Github",
    name: "Github",
    rtlName: "",
    icon: GitHubIcon,
    component: Github,
    layout: "/admin"
  },
  {
    path: "/Calculadora",
    name: "Calculadora",
    rtlName: "",
    icon: Calculator,
    component: Calculadora1,
    layout: "/admin"
  },
  
];

export default CarpoolRoutes;
