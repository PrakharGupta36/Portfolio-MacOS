import { ReactElement, useState } from "react";
import Draggable, { DraggableEventHandler } from "react-draggable";

export default function Window({ children }: { children: ReactElement }) {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragStart: DraggableEventHandler = () => {
    setIsDragging(true);
  };

  const handleDragStop: DraggableEventHandler = () => {
    setIsDragging(false);
  };

  return (
    <Draggable onStart={handleDragStart} onStop={handleDragStop}>
      <div className={`window`} style={{ zIndex: isDragging ? 3 : 1 }}>
        {children}
      </div>
    </Draggable>
  );
}
