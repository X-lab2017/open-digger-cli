import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const checkDateIsValid = (date: string, format: dayjs.OptionType) =>
  dayjs(date, format, true).isValid();

export const checkDateIsyyyyMM = (date: string) =>
  checkDateIsValid(date, 'YYYYMM');

export const checkDayIsBefore = (startDay: string, endDay: string) =>
  dayjs(startDay).isBefore(endDay);

export const checkMonthIsBefore = (startMonth: string, endMonth: string) =>
  checkDayIsBefore(`${startMonth}01`, `${endMonth}01`);
