import { getItem, removeItem, setItem } from "./localstorage";

const USER_DATA = "BIG_BUT_USER_DATA";

export const setData = (data: any) => {
  setItem(USER_DATA, data);
};

export const removeData = () => {
  removeItem(USER_DATA);
};

export const getAuthData = () => {
  try {
    const auth: any = getItem(USER_DATA);
    const date = JSON.parse(atob(auth.jwt.split(".")[1]));
    const exp: Date = new Date(date.exp * 1000);

    if (exp.getTime() > Date.now()) {
      return auth;
    }
  } catch (e) {
    console.log("Nguyen C: localstorage.tsx, F: getUserData, N: e ", e);
  }

  return null;
};

export const getToken = () => {
  const authData = getAuthData();

  return authData ? authData.jwt : null;
};

export const getUser = () => {
  const authData = getAuthData();

  return authData ? authData.user : null;
};
