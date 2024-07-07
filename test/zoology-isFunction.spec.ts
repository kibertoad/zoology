import { describe, expect, it } from 'vitest'
import { isFunction } from '../lib/zoology'

describe('zoology', () => {
  describe('isFunction', () => {
    it('positive cases', () => {
      expect(isFunction(() => {})).toEqual(true)
    })

    it('negative cases', () => {
      expect(isFunction([])).toEqual(false)
      expect(isFunction({})).toEqual(false)
      expect(isFunction(-1)).toEqual(false)
      expect(isFunction(0)).toEqual(false)
      expect(isFunction(1)).toEqual(false)
      expect(isFunction(new Number(1))).toEqual(false)
      expect(isFunction(1.5)).toEqual(false)
      expect(isFunction('')).toEqual(false)
      expect(isFunction('a')).toEqual(false)
      expect(isFunction(true)).toEqual(false)
      expect(isFunction(false)).toEqual(false)
      expect(isFunction(/ab+c/)).toEqual(false)
      expect(isFunction(null)).toEqual(false)
      expect(isFunction(undefined)).toEqual(false)
    })
  })
})
