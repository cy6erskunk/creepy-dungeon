const nextConfig = {
  images: {
    remotePatterns: [
      new URL('https://images.prismic.io/creepy-dungeon/*?auto=format,compress'),
      new URL('https://images.unsplash.com/*'),
    ]
  },
};

module.exports = nextConfig;
