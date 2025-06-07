import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
  // add redirect
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/",
        permanent: true,
      },
    ]
  },

  //  TODO: add BundleAnalyzer
}

export default nextConfig
