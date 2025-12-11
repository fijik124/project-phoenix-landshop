import { Roboto, Orbitron } from 'next/font/google';
 
export const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

export const orbitron = Orbitron({
  subsets: ['latin'], 
  weight: ['400', '500', '700', '900'],
  variable: '--font-orbitron',
});