import __authors from "./jsons/__users.json";
import { AuthorType } from "./types";
import logo from "@/images/logo.png";

import { Route } from "@/routers/types";

const imgs = [
  logo,
 
];

const DEMO_AUTHORS: AuthorType[] = __authors.map((item, index) => ({
  ...item,
  avatar: imgs[index] || item.avatar,
  href: item.href as Route,
}));

export { DEMO_AUTHORS };
