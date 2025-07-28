import { Request, Response, NextFunction } from 'express';

export const seoMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Basic SEO headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  next();
};