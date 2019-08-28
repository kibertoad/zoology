import { isNumber } from '..'

describe('zoology', () => {
  describe('isNumber', () => {
    it('positive cases', () => {
      expect(isNumber(-1)).toEqual(true)
      expect(isNumber(0)).toEqual(true)
      expect(isNumber(1)).toEqual(true)
      expect(isNumber(new Number(1))).toEqual(true)
      expect(isNumber(1.5)).toEqual(true)
    })

    it('negative cases', () => {
      expect(isNumber('')).toEqual(false)
      expect(isNumber('a')).toEqual(false)
      expect(isNumber([])).toEqual(false)
      expect(isNumber({})).toEqual(false)
      expect(isNumber(/ab+c/)).toEqual(false)
      expect(isNumber(null)).toEqual(false)
      expect(isNumber(undefined)).toEqual(false)
    })
  })
})
