const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  service1, service2,
} = require('../config/services.js');

const router = Router();

router.use('/service1.js', createProxyMiddleware({
  target: service1.url,
  pathRewrite: {
    '^/bundles/service1.js': service1.bundle,
  },
  changeOrigin: true,
}));

router.use('/service2.js', createProxyMiddleware({
  target: service2.url,
  pathRewrite: {
    '^/bundles/service2.js': service2.bundle,
  },
  changeOrigin: true,
}));

module.exports = router;