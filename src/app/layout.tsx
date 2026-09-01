import type { Metadata, Viewport } from 'next';
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import { StructuredData } from '../components/common/StructuredData';
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://diyachanda.dev';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#121110' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Diya Chanda — AI Researcher & Machine Learning Engineer',
    template: '%s | Diya Chanda',
  },
  description:
    'Undergraduate AI researcher and software engineer specializing in explainable deep learning, computer vision, and agricultural intelligence systems. Published IEEE and Springer author.',
  keywords: [
    'Diya Chanda',
    'AI Researcher',
    'Machine Learning Engineer',
    'Deep Learning',
    'Computer Vision',
    'Explainable AI',
    'XAI',
    'IEEE ICRITO',
    'Springer LNNS',
    'The Neotia University',
    'FruitQ-GradeX',
    'CampusSphere',
    'JalDrishti',
    'Next.js Portfolio',
    'PyTorch',
    'FastAPI',
  ],
  authors: [{ name: 'Diya Chanda', url: 'https://github.com/chandadiya2004' }],
  creator: 'Diya Chanda',
  publisher: 'Diya Chanda',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Diya Chanda — AI Researcher & Machine Learning Engineer',
    description:
      'Undergraduate AI researcher and software engineer specializing in explainable deep learning, computer vision, and agricultural intelligence systems.',
    siteName: 'Diya Chanda Portfolio',
    images: [
      {
        url: '/images/profile.webp',
        width: 800,
        height: 800,
        alt: 'Diya Chanda — AI Researcher & Machine Learning Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diya Chanda — AI Researcher & Machine Learning Engineer',
    description:
      'Undergraduate AI researcher and software engineer specializing in explainable deep learning, computer vision, and precision agricultural AI.',
    images: ['/images/profile.webp'],
    creator: '@chandadiya2004',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/icon1.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
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
      <head>
        <StructuredData />
      </head>
      <body className="antialiased selection:bg-terracotta/20 selection:text-terracotta">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
