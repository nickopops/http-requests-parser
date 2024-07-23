import { parseCommonLogFormat } from '../parseCommonLogFormat';

describe('parseCommonLogFormat', () => {
  it('should parse a log entry without referrer and user agent', () => {
    expect(
      parseCommonLogFormat(
        '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574',
      ),
    ).toEqual({
      ip: '177.71.128.21',
      ident: '-',
      auth: '-',
      date: '10/Jul/2018:22:21:28 +0200',
      method: 'GET',
      url: '/intranet-analytics/',
      protocol: 'HTTP/1.1',
      status: '200',
      size: '3574',
    });
  });

  it('should parse a log entry with referrer and user agent', () => {
    expect(
      parseCommonLogFormat(
        '72.44.32.10 - - [09/Jul/2018:15:48:20 +0200] "GET /download/counter/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"',
      ),
    ).toEqual({
      ip: '72.44.32.10',
      ident: '-',
      auth: '-',
      date: '09/Jul/2018:15:48:20 +0200',
      method: 'GET',
      url: '/download/counter/',
      protocol: 'HTTP/1.1',
      status: '200',
      size: '3574',
      referrer: '-',
      userAgent:
        'Mozilla/5.0 (X11; U; Linux x86; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7',
    });
  });

  it('should parse a log entry with auth', () => {
    expect(
      parseCommonLogFormat(
        '50.112.00.11 - admin [11/Jul/2018:17:31:05 +0200] "GET /hosting/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6"',
      ),
    ).toEqual({
      ip: '50.112.00.11',
      ident: '-',
      auth: 'admin',
      date: '11/Jul/2018:17:31:05 +0200',
      method: 'GET',
      url: '/hosting/',
      protocol: 'HTTP/1.1',
      status: '200',
      size: '3574',
      referrer: '-',
      userAgent:
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6',
    });
  });

  it('should parse a log entry with POST request', () => {
    expect(
      parseCommonLogFormat(
        '10.0.0.2 - - [10/Jul/2024:21:15:35 +0000] "POST /login HTTP/1.1" 401 522',
      ),
    ).toEqual({
      ip: '10.0.0.2',
      ident: '-',
      auth: '-',
      date: '10/Jul/2024:21:15:35 +0000',
      method: 'POST',
      url: '/login',
      protocol: 'HTTP/1.1',
      status: '401',
      size: '522',
    });
  });

  it('should return undefined for invalid log entry', () => {
    expect(parseCommonLogFormat('')).toBe(undefined);
  });
});
