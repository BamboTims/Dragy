import { useRef } from "react";
import { ColumnContainer, ColumnTitle } from "../../styles";
import { AddNewItem } from "../AddNewItem/AddNewItem";
import { useAppState } from "../../State/appstatecontext";
import { Card } from "../Card/Card";
import { useItemDrag } from "../../utils/useItemDrag";
import { useDrop } from "react-dnd";
import {
  addTask,
  moveList,
  moveTask,
  setDraggedItem,
} from "../../State/action";
import { isHidden } from "../../utils/isHidden";
import { DragItem } from "../dragItem/dragItem";

type ColumnProps = { text: string; id: string; isPreview?: boolean };

export const Column = ({ text, id, isPreview }: ColumnProps) => {
  const { getTasksByListId, dispatch, draggedItem } = useAppState();

  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    hover: (item: DragItem) => {
      if (item.type === "COLUMN") {
        if (!draggedItem) return;
        if (draggedItem.type === "COLUMN") {
          if (draggedItem.id === id) return;
          dispatch(moveList(draggedItem.id, id));
        }
      } else {
        if (!draggedItem) return;
        if (draggedItem.type !== "CARD") return;
        if (draggedItem.columnId === id) return;
        if (tasks.length) return;

        dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id));
        dispatch(setDraggedItem({ ...draggedItem, columnId: id }));
      }
    },
  });

  const { drag } = useItemDrag({ type: "COLUMN", id, text });

  drag(drop(ref));

  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} columnId={id} />
      ))}
      <AddNewItem
        toggleButtonText="+ add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};
