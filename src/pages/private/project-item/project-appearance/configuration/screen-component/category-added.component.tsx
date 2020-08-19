import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "components/ui-libraries";
import { DeleteIcon, EditIcon } from "components/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 100,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })
);

const CategoryAdded: React.FC<any> = ({ category, onEdit, onDelete }) => {
  const classes = useStyles();

  return (
    <Card variant={"outlined"} className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6" color={"textSecondary"}>
            {category.name}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton color={"primary"} onClick={onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <CardMedia className={classes.cover} image={category!.image!.src} />
    </Card>
  );
};

export default CategoryAdded;
