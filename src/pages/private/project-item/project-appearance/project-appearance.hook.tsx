import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { useMessage } from "hook/snackbar.hook";

import { dashboardState } from "pages/private/project-item/atom/data-dashboard.atom";
import { useProjectItemContext } from "../project-item.context";

const useProjectAppearanceHook = () => {
  const {
    wooCommerceRestApi,
  } = useProjectItemContext();
  const { showErrorMessage } = useMessage();
  const [state, setState] = useRecoilState(dashboardState);

  useEffect(() => {
    const { firstLoad } = state;

    if (!firstLoad || !wooCommerceRestApi) {
      return;
    }

    try {
      const getCategories = async () => {
        return wooCommerceRestApi
          .get("products/categories")
          .then((response: any) => {
            return response;
          })
          .catch((error: any) => {
            throw error;
          });
      };

      const getProducts = async () => {
        return wooCommerceRestApi
          .get("products")
          .then((response: any) => {
            return response;
          })
          .catch((error: any) => {
            throw error;
          });
      };

      Promise.all([getProducts(), getCategories()])
        .then((values) => {
          setState({
            firstLoad: false,
            products: values[0],
            categories: values[1],
          });
        })
        .catch((error) => {
          showErrorMessage(error.message);
        });
    } catch (e) {
      console.log("Nguyen C: ProjectAppearance index.tsx, F: , N: error ", e);
    }
  }, [state, setState, wooCommerceRestApi, showErrorMessage]);
};

export default useProjectAppearanceHook;
