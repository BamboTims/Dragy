import { useDrag } from "react-dnd";
import { useAppState } from "../State/appstatecontext";
import { DragItem } from "../Components/dragItem/dragItem";
import { setDraggedItem } from "../State/action";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });
  return { drag };
};
