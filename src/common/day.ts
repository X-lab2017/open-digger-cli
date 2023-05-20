import dateAndTime from 'date-and-time';

export const checkDateIsValid = (date: string, format: string) =>
  dateAndTime.isValid(date, format);

export const checkDateIsValidyyyyMM = (date: string) =>
  checkDateIsValid(date, 'YYYYMM');

export const checkDayIsBeforeyyyyMMDD = (startDay: string, endDay: string) =>
  dateAndTime
    .subtract(
      dateAndTime.parse(endDay, 'YYYYMMDD'),
      dateAndTime.parse(startDay, 'YYYYMMDD')
    )
    .toDays() > 0;

export const checkDayIsSameOrBeforeyyyyMMDD = (
  startDay: string,
  endDay: string
) =>
  dateAndTime
    .subtract(
      dateAndTime.parse(endDay, 'YYYYMMDD'),
      dateAndTime.parse(startDay, 'YYYYMMDD')
    )
    .toDays() >= 0;

export const isSameOrBeforeDayRangeyyyyMMDD = (
  day: string,
  startDay?: string,
  endDay?: string
) => {
  if (!startDay && !endDay) return true;
  const isSameOrAfterStartDay = startDay
    ? checkDayIsSameOrBeforeyyyyMMDD(startDay, day)
    : true;
  const isSameOrBeforeEndDay = endDay
    ? checkDayIsSameOrBeforeyyyyMMDD(day, endDay)
    : true;
  return isSameOrAfterStartDay && isSameOrBeforeEndDay;
};

export const checkMonthIsBeforeyyyyMM = (
  startMonth: string,
  endMonth: string
) => checkDayIsBeforeyyyyMMDD(`${startMonth}01`, `${endMonth}01`);

export const checkMonthIsSameOrBeforeyyyyMM = (
  startMonth: string,
  endMonth: string
) => checkDayIsSameOrBeforeyyyyMMDD(`${startMonth}01`, `${endMonth}01`);

export const isSameOrBeforeMonthRangeyyyyMM = (
  monrh: string,
  startMonth?: string,
  endMonth?: string
) =>
  isSameOrBeforeDayRangeyyyyMMDD(
    `${monrh}01`,
    startMonth ? `${startMonth}01` : undefined,
    endMonth ? `${endMonth}01` : undefined
  );
