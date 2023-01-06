import React, { FC } from "react";
import { ColumnContainer, ColumnTitle } from "../../styles";
import { AddNewItem } from "../AddNewItem/AddNewItem";

type ColumnProps = { text: string; children?: React.ReactNode };

export const Column: FC<ColumnProps> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
