"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seoMiddleware = void 0;
const seoMiddleware = (req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
};
exports.seoMiddleware = seoMiddleware;
//# sourceMappingURL=seo.js.map