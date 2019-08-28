import { getTag, isArguments, isArrayLike, isObjectLike, isPrototype, isTypedArray } from './utils'
import { nodeTypes } from './nodeTypes'
const nodeIsDate = nodeTypes && nodeTypes.isDate

export function isString(value: any): boolean {
  const type = typeof value
  return (
    type === 'string' ||
    (type === 'object' &&
      value != null &&
      !Array.isArray(value) &&
      getTag(value) == '[object String]')
  )
}

export function isNumber(value: any): boolean {
  return typeof value === 'number' || (isObjectLike(value) && getTag(value) === '[object Number]')
}

export function isFinite(value: any): boolean {
  return Number.isFinite(value)
}

export const isDate = nodeIsDate
  ? (value: any) => nodeIsDate(value)
  : (value: any) => isObjectLike(value) && getTag(value) == '[object Date]'

export function isBoolean(value: any): boolean {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == '[object Boolean]')
  )
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 */
export function isObject(value: any): boolean {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

export function isFunction(value: any): boolean {
  if (!isObject(value)) {
    return false
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  const tag = getTag(value)
  return (
    tag === '[object Function]' ||
    tag === '[object AsyncFunction]' ||
    tag === '[object GeneratorFunction]' ||
    tag === '[object Proxy]'
  )
}

export function isNil(value: any): boolean {
  return value == null
}

const hasOwnProperty = Object.prototype.hasOwnProperty
/**
 * Checks if `value` is a nil value, empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 * Numbers and booleans are never empty
 */
export function isEmpty(value: any): boolean {
  if (isNil(value)) {
    return true
  }
  if (isNumber(value) || isBoolean(value)) {
    return false
  }
  if (
    isArrayLike(value) &&
    (Array.isArray(value) ||
      typeof value === 'string' ||
      typeof value.splice === 'function' ||
      Buffer.isBuffer(value) ||
      isTypedArray(value) ||
      isArguments(value))
  ) {
    return !value.length
  }
  const tag = getTag(value)
  if (tag === '[object Map]' || tag === '[object Set]') {
    return !value.size
  }
  if (isPrototype(value)) {
    return !Object.keys(value).length
  }
  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false
    }
  }
  return true
}
