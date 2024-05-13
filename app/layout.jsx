import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import TanstackProvider from '@/tanstack_provider/TanstackProvider';
import { DarkModeProvider } from '@/darkmodecontext/DarkModeProvider';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  variable: '--font-nunitoSans',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning={true}
        className={`${nunitoSans.variable} ${nunitoSans.className}`}
      >
        <DarkModeProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}