import React from "react";
import { Main } from "./styles";
import { AddNewItem } from "./Components/AddNewItem/AddNewItem";
import { Column } from "./Components/Column/Column";
import { useAppState } from "./State/appstatecontext";

function App() {
  const { lists } = useAppState();

  return (
    <Main>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ add another list" onAdd={console.log} />
    </Main>
  );
}

export default App;
