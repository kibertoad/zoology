import { describe, expect, it } from 'vitest'
import { _isFinite } from '../lib/zoology'

describe('zoology', () => {
  describe('_isFinite', () => {
    it('positive cases', () => {
      expect(_isFinite(-1)).toEqual(true)
      expect(_isFinite(0)).toEqual(true)
      expect(_isFinite(1)).toEqual(true)
      expect(_isFinite(1.5)).toEqual(true)
    })

    it('negative cases', () => {
      expect(_isFinite('')).toEqual(false)
      expect(_isFinite('a')).toEqual(false)
      expect(_isFinite([])).toEqual(false)
      expect(_isFinite({})).toEqual(false)
      expect(_isFinite(new Number(1))).toEqual(false)
      expect(_isFinite(/ab+c/)).toEqual(false)
      expect(_isFinite(null)).toEqual(false)
      expect(_isFinite(undefined)).toEqual(false)
    })
  })
})
