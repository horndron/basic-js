import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let i = 1;
  let j = 1;
  let result = '';
  if(!options.separator) {
    options.separator = '+';
  }
  if(!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  do{
    result += str;

    while(j < options.additionRepeatTimes) {
      result += options.addition + options.additionSeparator;
      j++;
    } 
    if('addition' in options) {
      result += options.addition;
    }

    if(options.repeatTimes && i != options.repeatTimes) {
      result +=options.separator;
    } 

    i++;
    j = 1;
  } while (i <= options.repeatTimes)

  return result;
}
