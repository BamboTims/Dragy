import React from "react";
import { Main } from "./styles";
import { AddNewItem } from "./Components/AddNewItem/AddNewItem";
import { Column } from "./Components/Column/Column";
import { useAppState } from "./State/appstatecontext";
import { addList } from "./State/action";
import { text } from "stream/consumers";

function App() {
  const { lists, dispatch } = useAppState();

  return (
    <Main>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ add another list"
        onAdd={(text) => dispatch(addList(text))}
      />
    </Main>
  );
}

export default App;
