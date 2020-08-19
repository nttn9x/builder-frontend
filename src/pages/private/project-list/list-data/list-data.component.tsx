import React, { useMemo } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import _get from "lodash/get";

import { ROUTES } from "constants/navigation";
import { Grid } from "components/ui-libraries";
import { Container } from "components/ui-own";

import { GET_PROJECT_LIST_QUERY } from "queries/project.query";

import { getProjectItemURL } from "utils/navigation.util";

import AddIcon from "./list-data-add-icon.component";
import ListItem from "./list-data-item.component";
import ListEmpty from "./list-data-empty.component";

export const useCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      height: 270,
      borderRadius: 10,
    },
  })
);

const ListData = () => {
  const { data, loading } = useQuery(GET_PROJECT_LIST_QUERY);

  const projects = useMemo(() => (loading ? [] : _get(data, "projects", [])), [
    loading,
    data,
  ]);

  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item lg={2} md={3} xs={6}>
          <Link to={ROUTES.PROJECT_ITEM_ADD}>
            <AddIcon />
          </Link>
        </Grid>
        {loading && <ListEmpty />}
        {!loading &&
          projects.map((d: any, i: number) => (
            <Grid key={i} item lg={2} md={3} xs={6}>
              <Link key={i} to={getProjectItemURL(d.id)}>
                <ListItem project={d} />
              </Link>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default ListData;
