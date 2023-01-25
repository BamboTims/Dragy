import styled from "styled-components";

interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}

type AddItemButtonProps = {
  dark?: boolean;
};

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  opacity: ${(props) => (props.isHidden ? 0.3 : 1)};
  transform: ${(props) => (props.isPreview ? "rotate(5deg)" : undefined)};
`;

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #3179ba;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: #ebecf0;
  width: 30rem;
  min-height: 4rem;
  margin-right: 2rem;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 30rem;
  border-radius: 3px;
  box-shadow: #091e4240 0 1px 0 0;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 30rem;
  padding: 10px 12px;
  text-align: left;
  transition: 85ms ease-in;
  width: 100%;

  &:hover {
    background-color: "#ffffff52";
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0 1px 0 0;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;
