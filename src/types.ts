export type CommonLogEntry = {
  ip: string;
  ident: string;
  auth: string;
  date: string;
  method: string;
  url: string;
  protocol: string;
  status: string;
  size: string;
  referrer?: string;
  userAgent?: string;
};

export type CountResult = { value: string; count: number; place: number };
