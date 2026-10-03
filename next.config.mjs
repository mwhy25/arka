/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const api = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;
    if (!api) return [];
    return [{ source: "/api-proxy/:path*", destination: `${api}/api/:path*` }];
  }
};
export default nextConfig;
