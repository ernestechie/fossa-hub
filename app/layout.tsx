import { JsxElement } from 'typescript';
import './globals.css';

export const metadata = {
  title: 'FOSSA Hub - Igniting Potential',
  description:
    'Stay updated with FOSSA hub to keep abreast of the latest news and  developments in the Faculty of Science and the university community.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
