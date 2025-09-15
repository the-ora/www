import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/the-ora/browser",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.com/orabrowser",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://x.com/orabrowser",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/aYFUFyxx",
        permanent: true,
      },
      {
        source: "/donate",
        destination: "https://buymeacoffee.com/orabrowser",
        permanent: true,
      },
      {
        source: "/buymecoffee",
        destination: "https://buymeacoffee.com/orabrowser",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
