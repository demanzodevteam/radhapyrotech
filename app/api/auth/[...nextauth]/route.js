import CredentialsProvider from 'next-auth/providers/credentials';
import * as bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import { prisma } from '@/config/db';

export const authOptions = {
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
          placeholder: 'enter your email',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        // Check if user exists in the database
        const userExists = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        // User does not exist in database
        if (!userExists) {
          throw new Error('username or password is not correct');
        }

        // No password provided by user
        if (!credentials?.password) {
          throw new Error('please provide your password');
        }

        // Verify password
        const passwordVerify = await bcrypt.compare(
          credentials?.password,
          userExists?.password
        );

        // Password does not match
        if (!passwordVerify) {
          throw new Error('username or password is incorrect');
        }

        // Security purpose - omit password from user object
        const { password, ...user } = userExists;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // Assign the user id to the session
      const sessionUser = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      if (sessionUser) {
        session.user.id = sessionUser.id.toString();
        session.user.name = sessionUser.firstname.toString();
        session.user.image = sessionUser.image
          ? sessionUser.image.toString()
          : null;
        session.user.role = sessionUser.role.toString();
      }

      // Return the session
      return session;
    },
  },
};

const handler = (req, res) => NextAuth(req, res, authOptions);

export { handler as GET, handler as POST };
