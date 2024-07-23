const formatURL = (url: string) => {
  const trimmedUrl = url.trim();

  // Return '/' if url is an empty string
  if (!trimmedUrl) return '/';

  // Remove URL trailing slash unless it's '/'
  if (trimmedUrl.endsWith('/') && trimmedUrl.length > 1) {
    return trimmedUrl.slice(0, -1);
  }
  return trimmedUrl;
};

export const getHttpURLPath = (url: string) => {
  let urlPath = url;

  if (url.startsWith('http')) {
    try {
      const { pathname } = new URL(url);
      urlPath = pathname;
    } catch {
      // Do nothing
    }
  }

  return formatURL(urlPath);
};
