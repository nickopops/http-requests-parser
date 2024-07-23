import type { CountResult } from '@/types';

export const getTop3StringsByCounts = (
  stringCounts: Record<string, number>
) => {
  const strings = Object.keys(stringCounts);
  const sortedStrings = strings.sort(
    (a, b) => (stringCounts[b] ?? 0) - (stringCounts[a] ?? 0)
  );

  const top3Strings: CountResult[] = [];

  let thirdPlaceCount: number | undefined;

  for (const value of sortedStrings) {
    const count = stringCounts[value];

    if (!count) continue;

    if (top3Strings.length < 3) {
      top3Strings.push({ value, count, rank: top3Strings.length + 1 });

      if (top3Strings.length === 2) {
        thirdPlaceCount = count;
      }
    } else if (count === thirdPlaceCount) {
      top3Strings.push({ value, count, rank: 3 });
    } else {
      break;
    }
  }

  return top3Strings;
};
