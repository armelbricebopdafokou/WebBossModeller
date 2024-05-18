import { createProxyMiddleware } from 'http-proxy-middleware';

export const pubProxy = createProxyMiddleware({
    target: 'http://localhost:3601',
    changeOrigin: true,
    pathRewrite: {
        '^/pub': '',
    },
});

export const appProxy = createProxyMiddleware({
    target: 'http://localhost:3602',
    changeOrigin: true,
    pathRewrite: {
        '^/app': '',
    },
});

export const searchProxy = createProxyMiddleware({
    target: 'http://localhost:3603',
    changeOrigin: true,
    pathRewrite: {
        '^/search': '',
    },
});

export const postProxy = createProxyMiddleware({
    target: 'http://localhost:3604',
    changeOrigin: true,
    pathRewrite: {
        '^/po': '',
    },
});

export const chatProxy = createProxyMiddleware({
    target: 'http://localhost:3605',
    changeOrigin: true,
    pathRewrite: {
        '^/chat': '',
    },
});

export const discoverProxy = createProxyMiddleware({
    target: 'http://localhost:3606',
    changeOrigin: true,
    pathRewrite: {
        '^/dis': '',
    },
});

export const proProxy = createProxyMiddleware({
    target: 'http://localhost:3607',
    changeOrigin: true,
    pathRewrite: {
        '^/pro': '',
    },
});

export default { proProxy, appProxy, searchProxy, postProxy, chatProxy, pubProxy };