import React from 'react';
import type { Level } from '../core/Level';

interface LevelCellProps {
  level: Level,
  position: number
}

export function LevelCell(props: LevelCellProps) {
  const { level, position } = props;

  if (level.isActive(position)) {
    return (
      <div className="Table-Level-Cell" style={{ color: level.color }}>
        {level.index}
      </div>
    );
  }

  return null;
}
