import React, { useCallback, memo } from "react";

function Card({
  id,
  index,
  className,
  title,
  description,
  draggable,
  parentId
}) {
  const onDragStart = useCallback(
    event => {
      event.dataTransfer.setData("cardIndex", index);
      event.dataTransfer.setData("parentId", parentId);
    },
    [index, parentId]
  );

  const onDragOver = useCallback(event => {
    event.stopPropagation();
  }, []);

  return (
    <div
      id={id}
      className={className}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      draggable={draggable}
    >
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
}

export default memo(Card);
