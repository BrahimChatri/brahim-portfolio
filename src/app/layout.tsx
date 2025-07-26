import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { MotionProvider } from '@/components/motion-provider';

export const metadata: Metadata = {
  title: {
    default: "Brahim Chatri | Backend & Software Engineer",
    template: "%s | Brahim Chatri"
  },
  description: 'Passionate backend-focused software engineer from Agadir, Morocco. Specializing in Python, Django, FastAPI, and scalable system architecture. Building reliable, maintainable backend solutions.',
  keywords: [
    'Backend Engineer',
    'Software Engineer', 
    'Python Developer',
    'Django',
    'FastAPI',
    'Flask',
    'Rust',
    'API Development',
    'System Architecture',
    'Morocco',
    'Agadir',
    'Full Stack'
  ],
  authors: [{ name: 'Brahim Chatri' }],
  creator: 'Brahim Chatri',
  publisher: 'Brahim Chatri',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chatri.dev',
    title: 'Brahim Chatri | Backend & Software Engineer',
    description: 'Passionate backend-focused software engineer from Agadir, Morocco. Specializing in Python, Django, FastAPI, and scalable system architecture.',
    siteName: 'Brahim Chatri Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Brahim Chatri | Backend & Software Engineer',
    description: 'Passionate backend-focused software engineer from Agadir, Morocco. Specializing in Python, Django, FastAPI, and scalable system architecture.',
    creator: '@dev_brahim',
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
  alternates: {
    canonical: 'https://chatri.dev',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Optimized font loading with display=swap for better performance */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Favicon - using only SVG and ICO */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Brahim Chatri",
              jobTitle: "Backend & Software Engineer",
              description: "Passionate backend-focused software engineer from Agadir, Morocco",
              url: "https://chatri.dev", 
              address: {
                "@type": "PostalAddress",
                addressLocality: "Agadir",
                addressCountry: "Morocco"
              },
              sameAs: [
                "https://github.com/BrahimChatri",
                "https://linkedin.com/in/brahim-chatri",
                "https://x.com/dev_brahim"
              ],
              knowsAbout: [
                "Python",
                "Django",
                "FastAPI",
                "Flask",
                "Rust",
                "Backend Development",
                "API Development",
                "System Architecture"
              ]
            })
          }}
        />
      </head>
      <body className="font-body antialiased min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">
                {children}
              </div>
            </div>
            <Toaster />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}