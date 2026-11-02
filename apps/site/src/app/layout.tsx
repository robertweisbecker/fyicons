import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { SiteShell } from '@/components/SiteShell';
import { assetPath, siteUrl } from '@/lib/navigation';
import '../styles.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'FYIcons — 16×16px icons', template: '%s — FYIcons' },
  description:
    'Small icons for your apps. Download SVGs, use typed React components, or add editable icons with shadcn.',
  icons: { icon: assetPath('/favicon.svg') },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f5f5f5',
};

const themeScript = `try{var t=JSON.parse(localStorage.getItem('fyicons-theme-v1')||localStorage.getItem('astra-theme-v1')||'"light"');if(t==='dark'){document.documentElement.dataset.theme=t;document.querySelector('meta[name="theme-color"]').content='#0a0a0a'}}catch{}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
