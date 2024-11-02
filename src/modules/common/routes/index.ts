import { RouteInfo } from "./types";

enum Route {
  HOME = "HOME",
  CONTACT = "CONTACT",
}

export const Routes = Object.freeze<Record<Route, RouteInfo>>({
  [Route.HOME]: {
    url: "/",
    name: "Home",
  },
  [Route.CONTACT]: {
    url: "/",
    name: "Contact",
  },
});
