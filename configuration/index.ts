import { local } from "./local";

const env = <string>process.env.NODE_ENV;

const configurations: { [key: string]: any } = {
  local
};

export const config = configurations[env];
