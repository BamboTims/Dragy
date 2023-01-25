import { useDragLayer } from "react-dnd";
import { Column } from "../Column/Column";
import { CustomDragLayerContainer } from "../../styles";
import { useAppState } from "../../State/appstatecontext";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <Column id={draggedItem.id} text={draggedItem.text} isPreview />
    </CustomDragLayerContainer>
  ) : null;
};

