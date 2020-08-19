import { atom, selector } from "recoil";
import { getUser } from "utils/auth.util";

const user = getUser();

export enum AuthTypes {
  AUTH_VALUE = "AUTH_VALUE",
  USER_SELECT = "USER_SELECT",
  HAS_LOGIN_SELECT = "HAS_LOGIN_SELECT",
}

export const authState = atom({
  key: AuthTypes.AUTH_VALUE, // unique ID (with respect to other atoms/selectors)
  default: {
    hasLogin: user ? true : false,
    user,
  },
});

export const selectUser = selector({
  key: AuthTypes.USER_SELECT, // unique ID (with respect to other atoms/selectors)
  get: ({ get }: any) => {
    const state = get(authState);
    return state.user;
  },
});
