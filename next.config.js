// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const runtimeCaching = require('next-pwa/cache');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  pwa: {
    dest: 'public',
    disable: !isProd,
    runtimeCaching,
  },
});
