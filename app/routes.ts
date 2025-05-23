import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./routes/menu/layout.tsx", [
    index("./routes/home.tsx"),
    route("registration", "./routes/registration.tsx"),
    route("journeys", "./routes/journeys.tsx"),
  ]),

  // ...prefix("concerts", [
  //   // Ez prefixeli, hogy a lent lévők mind concerts el kezdődik
  //   index("./routes/concerts/home.tsx"), // ez igy tehat a /concerts
  //   route(":city", "./routes/concerts/city.tsx"), // dinamikus utvonal /concerts/:city a :city-t megkapja parameterkent az oldal params kent
  //   route("trending", "./routes/concerts/trending.tsx"),
  // ]),
] satisfies RouteConfig;
