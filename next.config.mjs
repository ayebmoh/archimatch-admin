/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/login/:path*', // Capture all paths starting with '/archVisitor/'
            has: [
              {
                type: 'cookie',
                key: 'authToken',
              },
              {
                  type: 'cookie',
                  key: 'user_type',
                  value: 'Admin'
              }
            ],
            permanent: true,
            destination: '/adminspace/archirequests', // Preserve captured path segment
          },
          
            
            
          {
            source: '/adminspace/:path*', // Capture all paths starting with '/architect/'
            missing: [
              {
                type: 'cookie',
                key: 'authToken',
              },
            ],
            permanent: true,
            destination: '/login', // Preserve captured path segment
          },
        ];
      },
};

export default nextConfig;
