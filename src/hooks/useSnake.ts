import { useCallback, useState } from "react";

export interface SnakeSegment {
  x: number;
  y: number;
}

export interface SnakeGameState {
  snake: SnakeSegment[];
  direction: "UP" | "DOWN" | "LEFT" | "RIGHT";
  food: SnakeSegment;
  isGameOver: boolean;
}

export function useSnake(): [
  SnakeGameState,
  (direction: SnakeGameState["direction"]) => void] {
  const [snakeState, setSnakeState] = useState<SnakeGameState>({
    snake: [{ x: 5, y: 5 }],
    direction: "RIGHT",
    food: { x: 8, y: 8 },
    isGameOver: false,
  });

  const changeDirection = useCallback(
    (newDirection: SnakeGameState["direction"]) => {
      setSnakeState((prevStyta) => ({
        ...prevStyta,
        direction: newDirection,
      }));
    },
    []
  );

  return [snakeState, changeDirection];
}
