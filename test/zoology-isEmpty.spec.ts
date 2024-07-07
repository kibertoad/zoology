import { describe, expect, it } from 'vitest'
import { isEmpty } from '..'

describe('zoology', () => {
  describe('isNil', () => {
    it('positive cases', () => {
      expect(isEmpty(null)).toEqual(true)
      expect(isEmpty(undefined)).toEqual(true)
      expect(isEmpty([])).toEqual(true)
      expect(isEmpty({})).toEqual(true)
      expect(isEmpty('')).toEqual(true)
      expect(isEmpty(() => {})).toEqual(true)
      expect(isEmpty(/ab+c/)).toEqual(true)
    })

    it('negative cases', () => {
      expect(isEmpty(-1)).toEqual(false)
      expect(isEmpty(0)).toEqual(false)
      expect(isEmpty(1)).toEqual(false)
      expect(isEmpty(new Number(1))).toEqual(false)
      expect(isEmpty(1.5)).toEqual(false)
      expect(isEmpty('a')).toEqual(false)
      expect(isEmpty(true)).toEqual(false)
      expect(isEmpty(false)).toEqual(false)
    })
  })
})
