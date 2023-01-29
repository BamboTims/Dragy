import { Main } from "./styles";
import { AddNewItem } from "./Components/AddNewItem/AddNewItem";
import { Column } from "./Components/Column/Column";
import { useAppState } from "./State/appstatecontext";
import { addList } from "./State/action";
import { CustomDragLayer } from "./Components/CustomDragLayer/CustomDragLayer";

function App() {
  const { lists, dispatch } = useAppState();

  return (
    <Main>
      <CustomDragLayer />
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
