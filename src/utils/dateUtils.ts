export const getPureDate = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);
  return newDate;
};

const convertToTwelveHourClock = (hour: number): number => {
  switch (hour) {
    case 0:
      return 12;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      return hour - 12;
    default:
      return hour;
  }
};

export const convertToReadableDate = (num?: number): string | undefined => {
  if (!num) {
    return 'no due date set at this time.';
  }
  const now = new Date();
  const pureNow = getPureDate(now);
  const date = new Date(num * 1000);
  const pureDate = getPureDate(date);
  const dayDiff = Math.floor(
    (pureDate.getTime() - pureNow.getTime()) / 86400000,
  );
  let hour = convertToTwelveHourClock(date.getHours());
  const dueTime = `${hour}:${date.getMinutes()} ${
    date.getHours() < 12 ? 'AM' : 'PM'
  }`;
  const isWas = date >= now ? 'is due' : 'was due';
  if (Math.abs(dayDiff) === 0) {
    return `${isWas} today at ${dueTime}`;
  } else if (Math.abs(dayDiff) === 1) {
    return `${isWas} ${dayDiff > 0 ? 'tomorrow' : 'yesterday'} at ${dueTime}`;
  } else if (Math.abs(dayDiff) <= 3) {
    return `${isWas} ${dayDiff > 0 ? 'in ' : ''}${Math.abs(dayDiff)} days ${
      dayDiff < 0 ? 'ago ' : ''
    }at ${dueTime}`;
  }
  return `${isWas} on ${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} at ${dueTime}`;
};
