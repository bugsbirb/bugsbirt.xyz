/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        return [
          {
            source: '/astrobirb', 
            destination: 'https://discord.gg/DhWdgfh3hN',
            permanent: true, 
          },
          {
            source: '/birb', 
            destination: 'https://discord.gg/DhWdgfh3hN',
            permanent: true,             
          },
          {
            source: 'ko-fi', 
            destination: 'https://ko-fi.com/bugsbirt',
            permanent: true,      
          },
          {
            source: 'hitman', 
            destination: 'https://bugsbirt.xyz',
            permanent: true,              
          },

        ];
      },

};

export default nextConfig;
