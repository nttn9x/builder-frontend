import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import clsx from "clsx";

import Collapse from "@material-ui/core/Collapse";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "components/ui-libraries";
import { ExpandLessIcon, ExpandMoreIcon } from "components/icons";

import { useStyles, useSubStyles } from "./navigation.styles";

const NavigationMenu = React.memo(({ data, onItemClick }: any) => {
  const { t } = useTranslation("project");
  const classes = useStyles();
  const subClasses = useSubStyles();
  const params: any = useParams();
  const selected = params.setting === data.path;
  const [expanded, setExpanded] = React.useState(selected);
  const hasChild = data.menus && data.menus.length > 0;

  const handleExpandClick = () => {
    setExpanded(!expanded);

    if (hasChild) {
      handleItemClick(data.menus[0].path);
    } else {
      onItemClick(data.path);
    }
  };

  const handleItemClick = (subPath: string) => {
    onItemClick(`${data.path}/${subPath}`);
  };

  return (
    <>
      <List className={classes.list}>
        <ListItem button onClick={handleExpandClick}>
          <ListItemIcon
            className={clsx(classes.icon)}
            style={selected ? { backgroundColor: data.color } : {}}
          >
            {data.icon}
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: selected ? classes.textPrimary : classes.textSecondary,
            }}
            primary={t(data.i18nKey)}
          />
          {hasChild && (
            <> {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}</>
          )}
        </ListItem>
      </List>
      {hasChild && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List className={classes.list}>
            {data.menus.map((m: any, i: number) => {
              return (
                <ListItem
                  key={i}
                  button
                  className={subClasses.menu}
                  onClick={() => handleItemClick(m.path)}
                >
                  <ListItemText
                    classes={{
                      primary:
                        params.subSetting === m.path
                          ? subClasses.textPrimary
                          : subClasses.textSecondary,
                    }}
                    primary={t(m.i18nKey)}
                  />
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
});

export default NavigationMenu;
