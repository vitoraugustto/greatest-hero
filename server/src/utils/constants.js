const { NODE_ENV } = process.env;

export const ENVIRONMENT = NODE_ENV || 'development';

export const CLIENT_URL =
  ENVIRONMENT === 'production'
    ? 'https://heros-market.vercel.app'
    : 'http://localhost:5173';
