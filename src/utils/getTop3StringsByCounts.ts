import type { CountResult } from '@/types';

export const getTop3StringsByCounts = (
  stringCounts: Record<string, number>
) => {
  const strings = Object.keys(stringCounts);
  const sortedStrings = strings.sort(
    (a, b) => (stringCounts[b] ?? 0) - (stringCounts[a] ?? 0)
  );

  const top3Strings: CountResult[] = [];

  for (const value of sortedStrings) {
    const count = stringCounts[value];

    if (count === undefined) continue;

    if (top3Strings.length === 0) {
      top3Strings.push({ value, count, place: 1 });
    } else {
      const previousPlace = top3Strings.at(-1);

      if (count === previousPlace?.count) {
        top3Strings.push({ value, count, place: previousPlace.place });
      } else if (top3Strings.length < 3) {
        top3Strings.push({ value, count, place: top3Strings.length + 1 });
      } else {
        break;
      }
    }
  }

  return top3Strings;
};
