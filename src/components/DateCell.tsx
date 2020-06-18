import { format, isSameDay } from 'date-fns';
import React from 'react';
import { baseDateFormat } from '../core/constants';

interface DateCellProps {
  date: Date
}

export function DateCell(props: DateCellProps) {
  const { date } = props;

  let className = 'Table-Date-Cell-Other';
  if (isSameDay(date, new Date())) {
    className = 'Table-Date-Cell-Today';
  }

  return (
    <span className={className}>
     {format(date, baseDateFormat)}
    </span>
  );
}
