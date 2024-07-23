export type CommonLogEntry = {
  ip: string;
  ident: string;
  authUser: string;
  date: string;
  method: string;
  url: string;
  status: string;
  size: string;
  referrer: string;
  userAgent: string;
};

export type CountResult = { value: string; count: number; rank: number };
