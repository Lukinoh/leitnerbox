import React, { useState } from 'react';
import './App.css';
import {
  DatePicker,
  DayOfWeek,
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  SpinButton,
  Text
} from '@fluentui/react';
import type {IColumn} from '@fluentui/react';
import './core/DateGenerator';
import { DateInfo, getDateInfos } from './core/DateGenerator';
import { DateCell } from './components/DateCell';
import { LevelCell } from './components/LevelCell';
import { levels, LOOP_DAYS } from './core/SevenLevelBox';
import { format } from 'date-fns';

/*
 Not the best, but good enough for my usage
*/

interface AppProps {
}

function App({}: AppProps) {
  const [startDate, setStartDate] = useState(new Date('2020-01-24'));
  const [shift, setShift] = useState(-4);
  const [size, setSize] = useState(32);

  const dateInfos = getDateInfos(startDate, new Date(), shift, LOOP_DAYS, size);

  const columns: IColumn[] = [
    {
      key: 'date',
      name: 'Date',
      minWidth: 150,
      maxWidth: 150,
      onRender: (item: DateInfo) => (
        <DateCell date={item.date}/>
      ),
    },
    ...levels.map(level => ({
      key: 'level' + level.index,
      name: '',
      minWidth: 25,
      maxWidth: 25,
      onRender: (item: DateInfo) => (
        <LevelCell level={level} position={item.position}/>
      ),
    })),
    {
      key: 'position',
      name: 'Position',
      fieldName: 'position',
      minWidth: 100,
      maxWidth: 100,
    },
    {
      key: 'day',
      name: 'Day',
      fieldName: 'day',
      minWidth: 100,
      maxWidth: 100,
    },
  ];

  const onShiftChange = (newShift: number): string => {
    if (!isNaN(newShift)) {
      setShift(newShift);
    }
    return '' + shift;
  };

  const onSizeChange = (newSize: number): string => {
    if (!isNaN(newSize)) {
      setSize(newSize);
    }

    if (newSize <= 0) {
      setSize(1);
    }

    return '' + size;
  };

  return (
    <div className="App">

      <Text variant='superLarge'>
        Leitner Box
      </Text>

      {/* We could use the stack component of fluentui*/}
      <div className="App-Input">
        <DatePicker
          className='App-Input-DatePicker App-Input-Margin'
          label='Start date'
          firstDayOfWeek={DayOfWeek.Monday}
          value={startDate}
          onSelectDate={(date: Date | null | undefined) => setStartDate(date!)}
          formatDate={(date: Date | undefined) => format(date!, 'dd-MM-yyyy')}
        />
        <div className='App-Input-Option'>
          <SpinButton
            label='Shift'
            className='App-Input-Margin'
            value={String(shift)}
            step={1}
            min={0}
            max={+Infinity}
            onBlur={(ev) => onShiftChange(+ev.target.value)}
            onIncrement={(value) => onShiftChange(+value + 1)}
            onDecrement={(value) => onShiftChange(+value - 1)}
          />
          <SpinButton
            className='App-Input-Margin'
            label='Size'
            value={String(size)}
            step={1}
            min={-Infinity}
            max={+Infinity}
            onBlur={(ev) => onSizeChange(+ev.target.value)}
            onIncrement={(value) => onSizeChange(+value + 1)}
            onDecrement={(value) => onSizeChange(+value - 1)}
          />
        </div>
      </div>

      <DetailsList
        className="App-Table"
        selectionMode={SelectionMode.none}
        items={dateInfos}
        columns={columns}
        layoutMode={DetailsListLayoutMode.fixedColumns}
      />

    </div>
  );
}

export default App;
