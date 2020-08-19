import React, { useEffect, useMemo, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import _get from "lodash/get";

import ScrollContainer from "react-indiana-drag-scroll";

import { Typography } from "components/ui-libraries";
import { COMPONENT_TYPES } from "constants/common";

import CategoryItem, { CategoryLoading } from "./category-item.component";
import { useProjectItemContext } from "../../../project-item.context";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 212,
      margin: `${theme.spacing(3 / 2)}px 0`,
      paddingLeft: theme.spacing(3 / 2),
      paddingRight: theme.spacing(3 / 2),
    },
    body: {
      height: "100%",
      display: "flex",
    },
    title: {
      marginBottom: theme.spacing(3 / 2),
    },
  })
);

const dataDefault: any = [
  { name: "Product 1", price: "0.0" },
  { name: "Product 2", price: "0.0" },
  { name: "Product 3", price: "0.0" },
  { name: "Product 4", price: "0.0" },
  { name: "Product 5", price: "0.0" },
  { name: "Product 6", price: "0.0" },
  { name: "Product 7", price: "0.0" },
];

const Category = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    state: {
      data: {
        config: { layout },
      },
      history: {
        layout: { name },
      },
    },
    wooCommerceRestApi,
  } = useProjectItemContext();
  const [state, setState] = useState({ loading: false, data: [] });
  const categoryId = useMemo(() => {
    try {
      return _get(
        layout,
        `[${name}].components[${COMPONENT_TYPES.CATEGORY}][0]`,
        null
      );
    } catch (e) {
      return [];
    }
  }, [name, layout]);

  useEffect(() => {
    if (!categoryId || !wooCommerceRestApi) {
      setState({
        data: dataDefault,
        loading: false,
      });
      return;
    }

    setState({
      data: [],
      loading: true,
    });

    wooCommerceRestApi
      .get("products", { category: categoryId })
      .then((response: any) => {
        const data: any = [];
        if (response) {
          for (let i = 0; i < response.length; i++) {
            const d: any = response[i];
            data.push({ name: d.name, url: _get(d, "images[0].src", null) });
          }
        }

        setState({
          data,
          loading: false,
        });
      })
      .catch((error: any) => {
        setState({
          data: [],
          loading: false,
        });
      });
  }, [categoryId, wooCommerceRestApi]);

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant={"h6"}
        color={"textSecondary"}
      >
        {t("collection")}
      </Typography>
      <ScrollContainer
        horizontal
        nativeMobileScroll={true}
        className={`${classes.body} scroll-container`}
      >
        {!state.loading &&
          state.data.map((e: any, i: number) => (
            <CategoryItem {...e} key={i} />
          ))}
        {state.loading && (
          <>
            <CategoryLoading />
            <CategoryLoading />
          </>
        )}
      </ScrollContainer>
    </div>
  );
};

export default Category;
