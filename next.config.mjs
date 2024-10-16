/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: "/order",
  // async headers() {
  //   return [
  //     {
  //       // Append the "Service-Worker-Allowed" header
  //       // to each response, overriding the default worker's scope.
  //       source: "/:path*",
  //       headers: [
  //         {
  //           key: "Service-Worker-Allowed",
  //           value: "/",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
