import { describe, expect, it } from 'vitest'
import { isDate } from '../lib/zoology'

describe('zoology', () => {
  describe('isDate', () => {
    it('positive cases', () => {
      expect(isDate(new Date(2019, 5, 5, 5, 5, 5))).toEqual(true)
    })

    it('negative cases', () => {
      expect(isDate(-1)).toEqual(false)
      expect(isDate(0)).toEqual(false)
      expect(isDate(1)).toEqual(false)
      expect(isDate(new Number(1))).toEqual(false)
      expect(isDate(1.5)).toEqual(false)
      expect(isDate('')).toEqual(false)
      expect(isDate('a')).toEqual(false)
      expect(isDate([])).toEqual(false)
      expect(isDate({})).toEqual(false)
      expect(isDate(/ab+c/)).toEqual(false)
      expect(isDate(null)).toEqual(false)
      expect(isDate(undefined)).toEqual(false)
    })
  })
})
