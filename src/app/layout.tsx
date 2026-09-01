import type { Metadata } from 'next';
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Diya Chanda — AI Researcher & Machine Learning Engineer',
  description:
    'Undergraduate AI researcher and software engineer specializing in explainable deep learning, computer vision, and agricultural intelligence systems. Published IEEE author.',
  keywords: [
    'Diya Chanda',
    'AI Researcher',
    'Machine Learning Engineer',
    'Deep Learning',
    'Computer Vision',
    'IEEE ICRITO',
    'Next.js Portfolio',
  ],
  authors: [{ name: 'Diya Chanda' }],
  openGraph: {
    title: 'Diya Chanda — AI Researcher & Machine Learning Engineer',
    description:
      'Undergraduate AI researcher and software engineer specializing in explainable deep learning, computer vision, and agricultural intelligence systems.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased selection:bg-terracotta/20 selection:text-terracotta">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
