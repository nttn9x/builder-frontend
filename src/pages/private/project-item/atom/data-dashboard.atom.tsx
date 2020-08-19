import { atom } from "recoil";

export enum Types {
  DASHBOARD_VALUE = "DASHBOARD_VALUE",
}

export const dashboardState = atom({
  key: Types.DASHBOARD_VALUE, // unique ID (with respect to other atoms/selectors)
  default: {
    firstLoad: true,
    products: [],
    categories: [],
  },
});
