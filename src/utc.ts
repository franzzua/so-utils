/**
 * Created by xamidylin on 2017-01-23.
 */
import {Moment} from './moment';
export {Moment} from './moment';

const moment = require('moment/moment.js');

require('moment-timezone/builds/moment-timezone-with-data-2012-2022.min.js');

export function utc(d: (Date | any | number | string) = new Date()): Moment {
  return moment['tz'](d, 'utc');
}

export function utcToday() {
  const now = utc();
  return now.hour(0).minute(0).second(0).millisecond(0);
}
