module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/room1",
        permanent: true,
      },
    ];
  },
};
