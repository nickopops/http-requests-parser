export const Logger = {
  error: (error: unknown) => {
    if (__DEV__ && process.env.NODE_ENV !== 'test') {
      console.log(error);
    } else {
      // Log Sentry error in production
    }
  },
};
