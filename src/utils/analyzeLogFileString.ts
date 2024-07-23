import type { CommonLogEntry, CountResult } from '@/types';
import { parseCommonLogFormat } from './parseCommonLogFormat';
import { getHttpURLPath } from './getHttpURLPath';
import { getBaseURLPath } from './getBaseURLPath';
import { getTop3StringsByCounts } from './getTop3StringsByCounts';

export const analyzeLogFileString = (
  fileString: string,
): {
  uniqueIPCount: number;
  top3IPs: CountResult[];
  top3FullUrls: CountResult[];
  top3UrlPaths: CountResult[];
  top3BaseUrlPaths: CountResult[];
} => {
  const rawLogData = fileString.split('\n');

  const logResults: CommonLogEntry[] = [];

  // Parse http logs
  for (const logEntry of rawLogData) {
    if (!logEntry) continue;

    const commonLogEntry = parseCommonLogFormat(logEntry);
    if (!commonLogEntry) continue;

    logResults.push(commonLogEntry);
  }

  const ipCounts: Record<string, number> = {};
  const fullUrlsCounts: Record<string, number> = {};
  const urlPathCounts: Record<string, number> = {};
  const baseUrlPathCounts: Record<string, number> = {};

  for (const log of logResults) {
    const { ip, url } = log;

    if (ip) {
      // Count unique IPs
      ipCounts[ip] = ipCounts[ip] ? ipCounts[ip] + 1 : 1;
    }

    if (url) {
      // Count unique full URL
      fullUrlsCounts[url] = fullUrlsCounts[url] ? fullUrlsCounts[url] + 1 : 1;
      // Count unique URL path
      const urlPath = getHttpURLPath(url);
      urlPathCounts[urlPath] = urlPathCounts[urlPath]
        ? urlPathCounts[urlPath] + 1
        : 1;
      // Count unique base URL path
      const baseUrlPath = getBaseURLPath(urlPath);
      if (!baseUrlPath) continue;
      baseUrlPathCounts[baseUrlPath] = baseUrlPathCounts[baseUrlPath]
        ? baseUrlPathCounts[baseUrlPath] + 1
        : 1;
    }
  }

  return {
    uniqueIPCount: Object.keys(ipCounts).length,
    top3IPs: getTop3StringsByCounts(ipCounts),
    top3FullUrls: getTop3StringsByCounts(fullUrlsCounts),
    top3UrlPaths: getTop3StringsByCounts(urlPathCounts),
    top3BaseUrlPaths: getTop3StringsByCounts(baseUrlPathCounts),
  };
};
