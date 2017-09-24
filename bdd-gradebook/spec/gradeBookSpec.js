/* global describe, it, expect, gradeBook */

describe('function gradeBook', function () {
  it('should be defined', function () {
    expect(gradeBook).toBeDefined()
  })

  it('should be a function', function () {
    expect(typeof gradeBook).toBe('function')
  })

  it('should return a string ', function () {
    expect(typeof gradeBook()).toBe('string')
  })

  it('should return one character', function () {
    var result = gradeBook()
    expect(result.length).toBe(1)
  })

  it('should return one of these characters: A, B, C, D or F', function () {
    var result = gradeBook()
    var match = /[ABCDF]/.test(result)
    expect(match).toBeTruthy()
  })
  describe('should return "A" when average of grades is between 90 & 100', function () {
    it('should return "A" when gradeBook(95,92,93)', function () {
      var result = gradeBook(95, 92, 93)
      expect(result).toBe('A')
    })
    it('should return "A" when gradeBook(100,100,100)', function () {
      var result = gradeBook(100, 100, 100)
      expect(result).toBe('A')
    })
    it('should return "A" when gradeBook(90,90,90)', function () {
      var result = gradeBook(90, 90, 90)
      expect(result).toBe('A')
    })
  })
  describe('should return "B" when average of grades is between 80 & 90', function () {
    it('should return "B" when gradeBook(85,81,89)', function () {
      var result = gradeBook(85, 81, 89)
      expect(result).toBe('B')
    })
  })
  describe('should return "C" when average of grades is between 70 & 80', function () {
    it('should return "C" when gradeBook(75,71,78)', function () {
      var result = gradeBook(75, 71, 78)
      expect(result).toBe('C')
    })
  })
  describe('should return "D" when average of grades is between 60 & 70', function () {
    it('should return "D" when gradeBook(65,65,65)', function () {
      var result = gradeBook(65, 65, 65)
      expect(result).toBe('D')
    })
  })
  describe('should return "F" when average of grades is less than 70', function () {
    it('should return "F" when gradeBook(20,10,25)', function () {
      var result = gradeBook(20, 10, 25)
      expect(result).toBe('F')
    })
    it('should return "F" when gradeBook(30,20,25)', function () {
      var result = gradeBook(30, 20, 25)
      expect(result).toBe('F')
    })
  })
})
