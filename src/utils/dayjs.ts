import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export function dayjsSetup() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
}

export function getTodayISO() {
  return dayjs().toISOString();
}

export function formatWithTimezone(date: string | undefined, format = 'D/MM/YYYY hh:mm') {
  if (!date) {
    return 'Not Available';
  }

  return dayjs(date).tz(dayjs.tz.guess()).format(format);
}
