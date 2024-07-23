import { exampleLogData } from '../__mocks__/exampleLogData';
import { analyzeLogFileString } from '../analyzeLogFileString';

describe('analyzeLogFileString', () => {
  test('should return the correct result from the sample log', () => {
    expect(analyzeLogFileString(exampleLogData)).toEqual({
      uniqueIPCount: 11,
      top3IPs: [
        { value: '168.41.191.40', count: 4, place: 1 },
        { value: '177.71.128.21', count: 3, place: 2 },
        { value: '50.112.00.11', count: 3, place: 2 },
        { value: '72.44.32.10', count: 3, place: 2 },
      ],
      top3FullUrls: [
        { value: '/docs/manage-websites/', count: 2, place: 1 },
        { value: '/intranet-analytics/', count: 1, place: 2 },
        { value: 'http://example.net/faq/', count: 1, place: 2 },
        { value: '/this/page/does/not/exist/', count: 1, place: 2 },
        { value: 'http://example.net/blog/category/meta/', count: 1, place: 2 },
        {
          value: '/blog/2018/08/survey-your-opinion-matters/',
          count: 1,
          place: 2,
        },
        { value: '/docs/manage-users/', count: 1, place: 2 },
        { value: '/blog/category/community/', count: 1, place: 2 },
        { value: '/faq/', count: 1, place: 2 },
        { value: '/faq/how-to-install/', count: 1, place: 2 },
        { value: '/asset.js', count: 1, place: 2 },
        { value: '/to-an-error', count: 1, place: 2 },
        { value: '/', count: 1, place: 2 },
        { value: '/docs/', count: 1, place: 2 },
        { value: '/moved-permanently', count: 1, place: 2 },
        { value: '/temp-redirect', count: 1, place: 2 },
        { value: '/faq/how-to/', count: 1, place: 2 },
        { value: '/translations/', count: 1, place: 2 },
        { value: '/newsletter/', count: 1, place: 2 },
        { value: '/hosting/', count: 1, place: 2 },
        { value: '/download/counter/', count: 1, place: 2 },
        { value: '/asset.css', count: 1, place: 2 },
      ],
      top3UrlPaths: [
        { value: '/faq', count: 2, place: 1 },
        { value: '/docs/manage-websites', count: 2, place: 1 },
        { value: '/intranet-analytics', count: 1, place: 3 },
        { value: '/this/page/does/not/exist', count: 1, place: 3 },
        { value: '/blog/category/meta', count: 1, place: 3 },
        {
          value: '/blog/2018/08/survey-your-opinion-matters',
          count: 1,
          place: 3,
        },
        { value: '/docs/manage-users', count: 1, place: 3 },
        { value: '/blog/category/community', count: 1, place: 3 },
        { value: '/faq/how-to-install', count: 1, place: 3 },
        { value: '/asset.js', count: 1, place: 3 },
        { value: '/to-an-error', count: 1, place: 3 },
        { value: '/', count: 1, place: 3 },
        { value: '/docs', count: 1, place: 3 },
        { value: '/moved-permanently', count: 1, place: 3 },
        { value: '/temp-redirect', count: 1, place: 3 },
        { value: '/faq/how-to', count: 1, place: 3 },
        { value: '/translations', count: 1, place: 3 },
        { value: '/newsletter', count: 1, place: 3 },
        { value: '/hosting', count: 1, place: 3 },
        { value: '/download/counter', count: 1, place: 3 },
        { value: '/asset.css', count: 1, place: 3 },
      ],
      top3BaseUrlPaths: [
        { value: '/faq', count: 4, place: 1 },
        { value: '/docs', count: 4, place: 1 },
        { value: '/blog', count: 3, place: 3 },
      ],
    });
  });
});
