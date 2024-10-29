import { RouteInfo } from "./types";

enum Route {
  HOME = "HOME",
}

export const Routes = Object.freeze<Record<Route, RouteInfo>>({
  [Route.HOME]: {
    url: "/",
    name: "Home",
  },
});
