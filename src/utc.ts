/**
 * Created by xamidylin on 2017-01-23.
 */
import {DateTime} from 'luxon';

export function utc(d: (Date | number | string) = undefined): DateTime {
  if (typeof d === "string"){
    return DateTime.fromISO(d);
  }
  if (typeof d === "number") {
    return DateTime.utc(d);
  }
  if (d instanceof Date){
    return DateTime.utc(+d);
  }
}

export function utcToday() {
  return utc().startOf('day');
}
