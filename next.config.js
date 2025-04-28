const nextConfig = {
  images: {
    remotePatterns: [
      new URL('https://images.prismic.io/creepy-dungeon/*?auto=format,compress'),
      new URL('https://images.unsplash.com/*'),
    ]
  },
  webpack: (config, { dev }) => {
    // Only exclude test files in production build
    if (!dev) {
      config.module.rules.push({
        test: /\.test\.(js|jsx|ts|tsx)$/,
        loader: 'ignore-loader'
      });
    }
    return config;
  },
};

module.exports = nextConfig;
