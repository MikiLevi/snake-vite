import type { Direction } from "./types";

export const GRID_SIZE = 20;
export const INITIAL_SPEED = 200;

export const DIRECTION: Record<string, Direction> = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};
