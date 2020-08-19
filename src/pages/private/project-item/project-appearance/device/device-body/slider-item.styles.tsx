import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerStyle: {
      height: 200,
      outline: "none",
    },
    bodyStyle: {
      height: "100%",
      display: "flex",
    },
    paperStyle: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: theme.shape.borderRadius * 2,
      backgroundColor: theme.palette.grey["200"],
      boxShadow: theme.shadows["2"],
      margin: theme.spacing(3 / 2),
    },
    textEmpty: {
      color: theme.palette.grey["700"],
    },
  })
);

export default useStyles;
