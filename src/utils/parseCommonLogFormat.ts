import type { CommonLogEntry } from '@/types';

const CLF_LOG_PATTERN =
  /^(?<ip>\S+) (?<ident>\S+) (?<auth>\S+) \[(?<date>.+?)\] "(?<method>\S+) (?<url>\S+) (?<protocol>\S+)" (?<status>\d{3}) (?<size>\d+|-)( "(?<referrer>[^"]*)" "(?<userAgent>[^"]*)")?/;

export const parseCommonLogFormat = (logEntry: string) => {
  const match = logEntry.match(CLF_LOG_PATTERN);
  return match?.groups as CommonLogEntry | undefined;
};
