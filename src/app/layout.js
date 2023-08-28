import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "DNS Info Tool",
  description:
    "Handy tool for quick Shodan Reconissance , IP Geolocation and Whois Lookup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>DNS Info Tool</title>
      <body className={`${inter.className} bg-mainbg bg-cover`}>
        {children}
      </body>
    </html>
  );
}

