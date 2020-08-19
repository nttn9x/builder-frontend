import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import PhotoImg from "styles/images/common/photo.png";
import { Skeleton, Typography } from "components/ui-libraries";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    product: {
      flex: "0 0 120px",
      height: 120,
      borderRadius: theme.shape.borderRadius,
      marginRight: theme.spacing(3),
    },
    image: {
      width: 120,
      height: 120,
      marginBottom: theme.spacing(3 / 2),
      objectFit: "cover",
      borderRadius: theme.shape.borderRadius * 2,
      boxShadow: theme.shadows[2],
    },
    name: {
      fontWeight: theme.typography.fontWeightMedium,
    },
    price: {
      fontSize: "0.750em",
    },
  })
);

const CategoryItem: React.FC<any> = React.memo(({ name, url, price }) => {
  const classes = useStyles();
  return (
    <div className={classes.product}>
      <img className={classes.image} src={url || PhotoImg} alt={"error"} />
      <Typography className={classes.name} color={"textPrimary"}>
        {name}
      </Typography>
      <Typography className={classes.price} color={"textPrimary"}>
        {price}
      </Typography>
    </div>
  );
});

export const CategoryLoading: React.FC<any> = React.memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.product}>
      <Skeleton variant={"rect"} className={classes.image} />
      <Skeleton variant={"text"} className={classes.name} width={"50%"} />
      <Skeleton variant={"text"} className={classes.price} width={"20%"} />
    </div>
  );
});

export default CategoryItem;
