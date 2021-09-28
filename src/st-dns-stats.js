import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let name = '';
  let result = {};
  let domainsSplit = domains.join('.').split('.').reverse();
  domainsSplit = [...new Set(domainsSplit)];

  for(let i = 0; i < domainsSplit.length; i++) {
    let countArray = [];
    
    countArray = domains.filter(item => item.indexOf(domainsSplit[i]) > -1)
    if(domains.length) {
      result[name + '.' + domainsSplit[i]] = countArray.length;
      if(countArray.length == domains.length){
        name += '.' + domainsSplit[i];
      }
    }
    
  }

  return result;
}
