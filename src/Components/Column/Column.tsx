import React from "react";
import { ColumnContainer, ColumnTitle } from "../../styles";
import { AddNewItem } from "../AddNewItem/AddNewItem";
import { useAppState } from "../../State/appstatecontext";
import { Card } from "../Card/Card";

type ColumnProps = { text: string; id: string };

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
