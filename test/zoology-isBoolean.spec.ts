import { describe, expect, it } from 'vitest'
import { isBoolean } from '..'

describe('zoology', () => {
  describe('isBoolean', () => {
    it('positive cases', () => {
      expect(isBoolean(true)).toEqual(true)
      expect(isBoolean(false)).toEqual(true)
    })

    it('negative cases', () => {
      expect(isBoolean(-1)).toEqual(false)
      expect(isBoolean(0)).toEqual(false)
      expect(isBoolean(1)).toEqual(false)
      expect(isBoolean(new Number(1))).toEqual(false)
      expect(isBoolean(1.5)).toEqual(false)
      expect(isBoolean('')).toEqual(false)
      expect(isBoolean('a')).toEqual(false)
      expect(isBoolean([])).toEqual(false)
      expect(isBoolean({})).toEqual(false)
      expect(isBoolean(/ab+c/)).toEqual(false)
      expect(isBoolean(null)).toEqual(false)
      expect(isBoolean(undefined)).toEqual(false)
    })
  })
})
