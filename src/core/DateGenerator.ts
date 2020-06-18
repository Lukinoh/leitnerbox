import { differenceInCalendarDays, addDays } from 'date-fns';

export interface DateInfo {
  position: number;
  day: number;
  date: Date
}

function getPositiveModulo(a: number, b: number): number {
  return ((a % b) + b) % b;
}

/**
 *
 * @param startDate The date where the loop start
 * @param currentDate The first date of the array
 * @param shift You can shift the first date of the array by a number
 * @param loopDays The size of loop to calculate position and day of DateInfo
 */
export function getDateInfos(startDate: Date, currentDate: Date, shift: number, loopDays: number, size: number): Array<DateInfo> {
  const dateInfos: Array<DateInfo> = [];

  const firstDate = addDays(currentDate, shift);
  const daysSinceFirstDate = differenceInCalendarDays(firstDate, startDate);
  const positionOfFirstDate = getPositiveModulo(daysSinceFirstDate, loopDays);

  return Array.from({ length: size }, (_, index) => index)
    .map(day => ({
      position: getPositiveModulo(positionOfFirstDate + day, loopDays),
      day: getPositiveModulo(positionOfFirstDate + day, loopDays) + 1,
      date: addDays(currentDate, shift + day),
    }));
}
