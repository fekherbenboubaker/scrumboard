import React, { useCallback, useMemo, useState } from "react";

import { List } from "./components";
import "./App.css";

const initialState = {
  stories: {
    title: "Story",
    cards: [
      { id: "card-1", title: "Task-1", description: "create REST API" },
      { id: "card-2", title: "Task-2", description: "Deploy app" }
    ]
  },
  open: {
    title: "Open",
    cards: []
  },
  inProgress: {
    title: "In Progress",
    cards: []
  },
  done: {
    title: "Done",
    cards: []
  }
};

function App() {
  const [board, setBoard] = useState(initialState);

  const boardKeys = useMemo(() => Object.keys(initialState), []);

  const onCardMove = useCallback(
    (cardIndex, source, destination) => {
      //remove card from the previous list
      const [card] = board[source].cards.splice(cardIndex, 1);

      //add card from the selected list
      board[destination].cards.push(card);

      //update the state
      setBoard({ ...board });
    },
    [board, setBoard]
  );

  return (
    <div className="App">
      <main className="flexbox">
        {boardKeys.map((key, index) => (
          <List
            key={key}
            id={key}
            title={board[key].title}
            className="list"
            cards={board[key].cards}
            onCardMove={onCardMove}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
