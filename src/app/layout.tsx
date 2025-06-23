   import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web bán hàng',
  description: 'web bán hàng',
};

   export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
    }
