// export { default } from 'next-auth/middleware';

// export const config = {
//   matcher: ['/dashboard/:path*'],
// };

// import { withAuth } from 'next-auth/middleware';
// import { NextResponse } from 'next/server';

// export default withAuth({
//   middleware(req) {
//     console.log(req.nextauth);
//   },
// });

// export const config = {
//   matcher: ['/dashboard/:path*'],
// };

// 13:04

import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = req.nextUrl;

    // If user is authenticated and trying to access the login page, redirect to the previous page or home
    if (token && pathname === '/login') {
      const previousPage = req.headers.get('referer') || '/';
      return NextResponse.redirect(new URL(previousPage, req.nextUrl));
    }

    // Define role-based access control rules
    // const adminRoutes = ['/admin'];
    // const userRoutes = ['/dashboard'];

    // Redirect users based on their roles
    // if (token) {
    //   if (
    //     adminRoutes.some((route) => pathname.startsWith(route)) &&
    //     token.role !== 'admin'
    //   ) {
    //     return NextResponse.redirect('/');
    //   }
    //   if (
    //     userRoutes.some((route) => pathname.startsWith(route)) &&
    //     token.role !== 'user'
    //   ) {
    //     return NextResponse.redirect('/');
    //   }
    // }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: async ({ token }) => {
        // Allow the middleware to be called without token
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*'],
};
