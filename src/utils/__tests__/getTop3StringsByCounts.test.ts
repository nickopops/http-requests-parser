import { getTop3StringsByCounts } from '../getTop3StringsByCounts';

describe('getTop3StringsByCounts', () => {
  test('should return top 3 strings by count', () => {
    expect(
      getTop3StringsByCounts({
        mango: 7,
        apple: 10,
        banana: 15,
        orange: 5,
      })
    ).toEqual([
      { value: 'banana', count: 15, place: 1 },
      { value: 'apple', count: 10, place: 2 },
      { value: 'mango', count: 7, place: 3 },
    ]);
  });

  test('should handle ties for the first place', () => {
    expect(
      getTop3StringsByCounts({
        apple: 10,
        banana: 10,
        mango: 7,
        orange: 10,
      })
    ).toEqual([
      { value: 'apple', count: 10, place: 1 },
      { value: 'banana', count: 10, place: 1 },
      { value: 'orange', count: 10, place: 1 },
    ]);
  });

  test('should handle ties for the second place', () => {
    expect(
      getTop3StringsByCounts({
        banana: 10,
        apple: 20,
        orange: 10,
        mango: 10,
      })
    ).toEqual([
      { value: 'apple', count: 20, place: 1 },
      { value: 'banana', count: 10, place: 2 },
      { value: 'orange', count: 10, place: 2 },
      { value: 'mango', count: 10, place: 2 },
    ]);
  });

  test('should handle ties for the third place', () => {
    expect(
      getTop3StringsByCounts({
        apple: 20,
        orange: 5,
        banana: 10,
        mango: 5,
      })
    ).toEqual([
      { value: 'apple', count: 20, place: 1 },
      { value: 'banana', count: 10, place: 2 },
      { value: 'orange', count: 5, place: 3 },
      { value: 'mango', count: 5, place: 3 },
    ]);
  });

  test('should return fewer than 3 results if there are not enough entries', () => {
    expect(getTop3StringsByCounts({ apple: 20, orange: 5 })).toEqual([
      { value: 'apple', count: 20, place: 1 },
      { value: 'orange', count: 5, place: 2 },
    ]);
  });

  test('should return an empty array if no entries', () => {
    expect(getTop3StringsByCounts({})).toEqual([]);
  });
});
