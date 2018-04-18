'use strict'

const assert = require('assert')
const unarray = require('.')

describe('unarray', function () {
  it('should return a non-array as-is', function () {
    assert.strictEqual(unarray(123), 123)
    const obj = {}
    assert.strictEqual(unarray(obj), obj)
  })

  it('should return a value wrapped in an array', function () {
    assert.strictEqual(unarray([123]), 123)
  })

  it('should return an array wrapped in an array', function () {
    const arr = [123]
    assert.strictEqual(unarray([arr]), arr)
  })

  it('should return the provided `fallback` instead of an array', function () {
    assert.strictEqual(unarray([[1]], {fallback: 2}), 2)
  })

  it('should return a value wrapped in multiple arrays if `recursive` is true', function () {
    assert.strictEqual(unarray([[123]], {recursive: true}), 123)
  })

  it('should know better than to chase a recursive rabbit down the rabbit hole', function () {
    const arr = []
    arr[0] = arr
    assert.strictEqual(unarray(arr, {fallback: 1}), 1)
  })
})
