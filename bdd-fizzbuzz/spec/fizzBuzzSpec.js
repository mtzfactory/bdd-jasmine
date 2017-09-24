/* global describe, it, expect, fizzBuzz */

describe('function fizzBuzz', function () {
  it('should be defined', function () {
    expect(fizzBuzz).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof fizzBuzz).toBe('function')
  })
  it('should return an array', function () {
    var result = fizzBuzz()
    expect(Array.isArray(result)).toBeTruthy()
  })
  it('should return an array of 100 elements', function () {
    var result = fizzBuzz()
    expect(result.length).toBe(100)
  })
  it('should have 1 in first position', function () {
    var result = fizzBuzz()
    expect(result[0]).toBe(1)
  })
  it('should have "Fizz" in third position', function () {
    var result = fizzBuzz()
    expect(result[2]).toBe('Fizz')
  })
  it('should have "FizzBuzz" in 15th position', function () {
    var result = fizzBuzz()
    expect(result[14]).toBe('FizzBuzz')
  })

})
