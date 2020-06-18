import { Level } from './Level';

export const LOOP_DAYS = 64;

export const levels: Array<Level> = [
  new Level(1, '#eb423c', (position: number) => position % 1 === 0),
  new Level(2, '#f17740', (position: number) => position % 2 === 0),
  new Level(3, '#fed937', (position: number) => (position + 3) % 4 === 0),
  new Level(4, '#7dbf4b', (position: number) => (position + 4) % 16 === 0 || (position + 13) % 16 === 0),
  new Level(5, '#1893cd', (position: number) => (position + 5) % 16 === 0),
  new Level(6, '#663a86', (position: number) => (position + 12) % 35 === 0),
  new Level(7, '#ed5291', (position: number) => (position === 55)),
];
