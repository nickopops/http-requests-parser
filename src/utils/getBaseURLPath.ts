export const getBaseURLPath = (urlPath: string) => {
  const [, baseUrlPath] = urlPath.split('/');
  return typeof baseUrlPath === 'string' ? `/${baseUrlPath}` : null;
};
