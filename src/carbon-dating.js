import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
 const HALF_LIFE_PERIOD = 5700,
       MODERN_ACTIVITY = 15;
  if((typeof sampleActivity) == 'string' &&  Number(sampleActivity)){
    if(Number(sampleActivity) > 0 && Number(sampleActivity) <= MODERN_ACTIVITY){
      let dateTime = Math.log(15 / sampleActivity) / (0.693 / 5730);
      return Math.ceil(dateTime);
    }
    
  } 
  return false;
}
