import { nodeTypes } from './nodeTypes'

const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray
const _toString = Object.prototype.toString
const objectProto = Object.prototype

const MAX_SAFE_INTEGER = 900719925474099

/** Used to match `toStringTag` values of typed arrays. */
// @ts-ignore

const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/

export function getTag(value: any): string {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return _toString.call(value)
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */
export function isObjectLike(value: any): boolean {
  return typeof value === 'object' && value != null
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */
export function isArguments(value: any): boolean {
  return isObjectLike(value) && getTag(value) == '[object Arguments]'
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @example
 *
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(Function)
 * // => false
 */
export function isArrayLike(value: any): boolean {
  return value != null && typeof value != 'function' && isLength(value.length)
}

/**
 * Checks if `value` is likely a prototype object.
 */
export function isPrototype(value: any): boolean {
  const Ctor = value && value.constructor
  const proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto

  return value === proto
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */
export function isLength(value: any): boolean {
  return typeof value === 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @example
 *
 * isTypedArray(new Uint8Array)
 * // => true
 *
 * isTypedArray([])
 * // => false
 */
export const isTypedArray = nodeIsTypedArray
  ? (value: any): boolean => nodeIsTypedArray(value)
  : (value: any): boolean => isObjectLike(value) && reTypedTag.test(getTag(value))
