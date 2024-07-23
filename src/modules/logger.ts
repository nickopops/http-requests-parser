export const Logger = {
  error: (error: unknown) => {
    if (__DEV__) {
      console.log(error);
    } else {
      // Log Sentry error in production
    }
  },
};
