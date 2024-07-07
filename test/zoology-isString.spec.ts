import { describe, expect, it } from 'vitest'
import { isString } from '..'

describe('zoology', () => {
  describe('isString', () => {
    it('positive cases', () => {
      expect(isString('')).toEqual(true)
      expect(isString('value')).toEqual(true)
      expect(isString('1')).toEqual(true)
      expect(isString(new String('value'))).toEqual(true)
    })

    it('negative cases', () => {
      expect(isString(0)).toEqual(false)
      expect(isString(-1)).toEqual(false)
      expect(isString(1)).toEqual(false)
      expect(isString({})).toEqual(false)
      expect(isString(/ab+c/)).toEqual(false)
      expect(isString([])).toEqual(false)
      expect(isString(null)).toEqual(false)
      expect(isString(undefined)).toEqual(false)
    })
  })
})
