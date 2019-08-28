import { isFinite } from '..'

describe('zoology', () => {
  describe('isFinite', () => {
    it('positive cases', () => {
      expect(isFinite(-1)).toEqual(true)
      expect(isFinite(0)).toEqual(true)
      expect(isFinite(1)).toEqual(true)
      expect(isFinite(1.5)).toEqual(true)
    })

    it('negative cases', () => {
      expect(isFinite('')).toEqual(false)
      expect(isFinite('a')).toEqual(false)
      expect(isFinite([])).toEqual(false)
      expect(isFinite({})).toEqual(false)
      expect(isFinite(new Number(1))).toEqual(false)
      expect(isFinite(/ab+c/)).toEqual(false)
      expect(isFinite(null)).toEqual(false)
      expect(isFinite(undefined)).toEqual(false)
    })
  })
})
