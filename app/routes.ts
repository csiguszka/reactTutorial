import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./routes/index.tsx"),
  
  ...prefix("chapter", [
    route(":id", "./routes/chapter.$id.tsx"),
  ]),
] satisfies RouteConfig;
