import { isObject } from '..'

describe('zoology', () => {
  describe('isBoolean', () => {
    it('positive cases', () => {
      expect(isObject([])).toEqual(true)
      expect(isObject({})).toEqual(true)
      expect(isObject(new Number(1))).toEqual(true)
      expect(isObject(/ab+c/)).toEqual(true)
    })

    it('negative cases', () => {
      expect(isObject(-1)).toEqual(false)
      expect(isObject(0)).toEqual(false)
      expect(isObject(1)).toEqual(false)
      expect(isObject(1.5)).toEqual(false)
      expect(isObject('')).toEqual(false)
      expect(isObject('a')).toEqual(false)
      expect(isObject(true)).toEqual(false)
      expect(isObject(false)).toEqual(false)
      expect(isObject(null)).toEqual(false)
      expect(isObject(undefined)).toEqual(false)
    })
  })
})
