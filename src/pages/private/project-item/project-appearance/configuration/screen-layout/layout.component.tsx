import React, {useCallback, useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";

import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

import {IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText,} from "components/ui-libraries";
import {DragIndicatorIcon, SettingsApplicationsRoundedIcon,} from "components/icons";

import {STEP_TYPES} from "constants/common";

import {useProjectItemContext} from "../../../project-item.context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectedItem: {
      color: theme.palette.primary.main,
    },
  })
);

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Layout = React.memo(() => {
  const classes = useStyles();
  const { t } = useTranslation("project");
  const {
    state: {
      data: {
        config: { layout },
      },
      history: {
        layout: { name: screenId },
      },
    },
    setState: setStateGlobal,
  } = useProjectItemContext();

  const [state, setState] = useState(() => {
    const components = layout[screenId].order;

    return { components };
  });

  const onDragEnd = useCallback(
    (result: any) => {
      // dropped outside the list
      if (!result.destination) {
        return;
      }

      const components: any = reorder(
        state.components,
        result.source.index,
        result.destination.index
      );

      setState((preState: any) => ({ ...preState, components }));

      setStateGlobal((draft: any) => {
        draft.data.config.layout[screenId].order = components;
      });
    },
    [state.components, setStateGlobal, setState, screenId]
  );

  const onSelectComponent = useCallback(
    (component: string) => {
      setStateGlobal((preState: any) => ({
        ...preState,
        history: {
          ...preState.history,
          component,
          step: STEP_TYPES.Component,
        },
      }));
    },
    [setStateGlobal]
  );

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {state.components.map((item: any, index: number) => (
                <Draggable index={index} key={item.id} draggableId={item.id}>
                  {(provided: any, snapshot: any) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{ ...provided.draggableProps.style }}
                    >
                      <ListItem button>
                        <ListItemIcon>
                          <DragIndicatorIcon />
                        </ListItemIcon>
                        <ListItemText
                          classes={{
                            primary: snapshot.isDragging
                              ? classes.selectedItem
                              : "",
                          }}
                          primary={t(item.i18nKey)}
                        />
                        <ListItemSecondaryAction
                          onClick={() => onSelectComponent(item.id)}
                        >
                          <IconButton edge="end" aria-label="delete">
                            <SettingsApplicationsRoundedIcon color={"action"} />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
});

export default Layout;
