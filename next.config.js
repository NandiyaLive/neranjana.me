module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})
module.exports = withBundleAnalyzer({})