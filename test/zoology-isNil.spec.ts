import { isNil } from '..'

describe('zoology', () => {
  describe('isNil', () => {
    it('positive cases', () => {
      expect(isNil(null)).toEqual(true)
      expect(isNil(undefined)).toEqual(true)
    })

    it('negative cases', () => {
      expect(isNil([])).toEqual(false)
      expect(isNil({})).toEqual(false)
      expect(isNil(-1)).toEqual(false)
      expect(isNil(0)).toEqual(false)
      expect(isNil(1)).toEqual(false)
      expect(isNil(new Number(1))).toEqual(false)
      expect(isNil(1.5)).toEqual(false)
      expect(isNil('')).toEqual(false)
      expect(isNil('a')).toEqual(false)
      expect(isNil(true)).toEqual(false)
      expect(isNil(false)).toEqual(false)
      expect(isNil(/ab+c/)).toEqual(false)
      expect(isNil(() => {})).toEqual(false)
    })
  })
})
