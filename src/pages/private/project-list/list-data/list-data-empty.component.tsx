import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Card, CardContent, Grid, Skeleton } from "components/ui-libraries";

import { useCardStyles } from "./list-data.component";

export const useItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      borderWidth: 0,
      display: "flex",
      flexDirection: "column",
    },
    text: {
      padding: theme.spacing(1.5),
      width: "60%",
    },
    skeleton: {
      height: "100%",
      width: "100%",
    },
  })
);

const ListDataEmpty = React.memo(({ project }: any) => {
  const cardClasses = useCardStyles();
  const itemStyles = useItemStyles();

  return (
    <>
      <Grid item lg={2} md={3} xs={6}>
        <Card className={`${cardClasses.card} ${itemStyles.card}`}>
          <CardContent className={itemStyles.text}>
            <Skeleton variant={"text"} />
          </CardContent>
          <Skeleton variant={"rect"} className={itemStyles.skeleton} />
        </Card>
      </Grid>
      <Grid item lg={2} md={3} xs={6}>
        <Card className={`${cardClasses.card} ${itemStyles.card}`}>
          <CardContent className={itemStyles.text}>
            <Skeleton variant={"text"} />
          </CardContent>
          <Skeleton variant={"rect"} className={itemStyles.skeleton} />
        </Card>
      </Grid>
    </>
  );
});

export default ListDataEmpty;
