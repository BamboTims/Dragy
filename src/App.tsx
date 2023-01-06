import React from "react";
import { Main } from "./styles";
import { AddNewItem } from "./Components/AddNewItem/AddNewItem";
import { Card } from "./Components/Card/Card";
import { Column } from "./Components/Column/Column";

function App() {
  return (
    <Main>
      <Column text="To do">
        <Card text="Generate App scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin Static Typing" />
      </Column>
      <AddNewItem toggleButtonText="+ add another list" onAdd={console.log} />
    </Main>
  );
}

export default App;
