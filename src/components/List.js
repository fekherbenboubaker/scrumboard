import React, { useCallback, memo } from "react";

import Card from "./Card";

function List({ id, title, className, cards, onCardMove }) {
  const onDrop = useCallback(
    event => {
      event.preventDefault();

      const cardIndex = event.dataTransfer.getData("cardIndex");
      const parentId = event.dataTransfer.getData("parentId");

      if (event.target.className === className) {
        onCardMove(cardIndex, parentId, event.target.id);
      }
    },
    [onCardMove, className]
  );

  const onDragOver = useCallback(event => {
    event.preventDefault();
  }, []);

  return (
    <div id={id} className={className} onDrop={onDrop} onDragOver={onDragOver}>
      <h3>{title}</h3>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          index={index}
          parentId={id}
          id={card.id}
          title={card.title}
          description={card.description}
          className="card"
          draggable
        />
      ))}
      <button>Add new task</button>
    </div>
  );
}

export default memo(List);
