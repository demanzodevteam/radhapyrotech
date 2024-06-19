// // export const config = {
// //   matcher: ['/dashboard/:path*'],
// // };

// // import { withAuth } from 'next-auth/middleware';
// // import { NextResponse } from 'next/server';

// // export default withAuth({
// //   middleware(req) {
// //     console.log(req.nextauth);
// //   },
// // });

// // export const config = {
// //   matcher: ['/dashboard/:path*'],
// // };

// // 13:04

// import { withAuth } from 'next-auth/middleware';
// import { NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// export default withAuth(
//   async function middleware(req) {
//     const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//     const { pathname } = req.nextUrl;

//     console.log('Request url',req.url);
//     console.log('TOKEN', token);
//     console.log('AUTH', req);

//     // If user is authenticated and trying to access the login page, redirect to the previous page or home
//     // if (token) {
//     //   return NextResponse.redirect(new URL('/', req.url));
//     // }

//     // Define access control rules
//     // const dashboardRoute = '/dashboard';
//     // const usersRoute = '/dashboard/users';

//     // Redirect users based on their roles
//     // Redirect based on user roles
//     // if (token) {
//     //   // Allow access to dashboard route for both 'user' and 'admin' roles
//     //   if (pathname.startsWith(dashboardRoute)) {
//     //     return NextResponse.next();
//     //   }

//     //   // Allow access to users route only for 'admin' role
//     //   if (pathname.startsWith(usersRoute) && token.role !== 'Admin') {
//     //     return NextResponse.redirect(new URL(dashboardRoute, req.url));
//     //   }
//     // }

//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       authorized: async ({ token }) => {
//         // Allow the middleware to be called without token
//         return !!token;
//       },
//     },
//   }
// );

// import { withAuth } from 'next-auth/middleware';
// import { NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// export default withAuth(
//   async function middleware(req) {
//     const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//     const { pathname } = req.nextUrl;

//     // If user is authenticated and trying to access the login page, redirect to the previous page or home

//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       authorized: async ({ token }) => {
//         // Allow the middleware to be called without token
//         return !!token;
//       },
//     },
//   }
// );

export { default } from 'next-auth/middleware';


export const config = {
  matcher: ['/dashboard/:path*'],
};
