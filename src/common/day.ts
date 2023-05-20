import dateAndTime from 'date-and-time';

export const checkDateIsValid = (date: string, format: string) =>
  dateAndTime.isValid(date, format);

export const checkDateIsyyyyMM = (date: string) =>
  checkDateIsValid(date, 'YYYYMM');

export const checkDayIsBefore = (startDay: string, endDay: string) =>
  dateAndTime
    .subtract(
      dateAndTime.parse(endDay, 'YYYYMMDD'),
      dateAndTime.parse(startDay, 'YYYYMMDD')
    )
    .toDays() > 0;

export const checkMonthIsBefore = (startMonth: string, endMonth: string) =>
  checkDayIsBefore(`${startMonth}01`, `${endMonth}01`);
