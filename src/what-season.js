import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if(!date ){
    return 'Unable to determine the time of year!';
  }

  let dateContainer = new Date(date);

  if(!(Object.prototype.toString.call(date) === '[object Date]') && isNaN(dateContainer.getDate()) && date.getMonth.call) {
     throw new Error('Invalid date!');
  }

  let month = date.getMonth(),
      seasons = {
        'spring': [2,3,4],
        'summer': [5,6,7],
        'autumn': [8,9,10],
        'winter': [11,0,1],
      };
      
  for (let key in seasons) {
    if(seasons[key].indexOf(month) != -1){
      return key;
    }
  }
}
