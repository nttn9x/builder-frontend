import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Card, CardContent } from "components/ui-libraries";
import { TypographyNowrap } from "components/ui-own";

import { useCardStyles } from "./list-data.component";

export const useItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      borderWidth: 0,
      display: "flex",
      flexDirection: "column",
    },
    cardBody: {
      backgroundColor: theme.palette.primary.light,
      flex: 1,
    },
    cardHeader: {
      padding: theme.spacing(1.5),
    },
    title: {
      backgroundColor: theme.palette.background.paper,
    },
    titleText: {
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
);

const ListDataItem = React.memo(({ project }: any) => {
  const cardClasses = useCardStyles();
  const itemStyles = useItemStyles();

  return (
    <Card className={`${cardClasses.card} ${itemStyles.card}`}>
      <CardContent className={itemStyles.cardHeader}>
        <div className={itemStyles.title}>
          <TypographyNowrap
            className={itemStyles.titleText}
            variant={"subtitle1"}
            color={"textPrimary"}
            title={project.name}
          ></TypographyNowrap>
        </div>
      </CardContent>
      <div className={itemStyles.cardBody}></div>
    </Card>
  );
});

export default ListDataItem;
