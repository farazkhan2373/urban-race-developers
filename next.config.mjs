/** @type {import('next').NextConfig} */
const nextConfig = {
     output: 'export',   // 👈 this tells Next.js to create /out
     // Disable image optimization for static export
     images: {
          unoptimized: true,
     },

     // Trailing slash configuration
     trailingSlash: true,

     // Disable server-side features for static export
     generateBuildId: async () => {
          return 'static-build'
     },

     // Custom webpack config if needed
     webpack: (config) => {
          // Add any custom webpack configurations here
          return config;
     },
};

export default nextConfig;
