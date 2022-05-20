/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    SERVER_APP : process.env.SERVER_APP,
    API_ENDPOINT : process.env.API_ENDPOINT,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'via.placeholder.com',
    ],
  },
}

module.exports = nextConfig
