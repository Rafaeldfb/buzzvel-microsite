import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/navbar/Navbar"

const raleway = Raleway({ 
  subsets: ["latin"],
  variable: '--font-raleway',
  weight: ['100', '300', '400', '500', '700', '900'],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata = {
  title: "Rafael at Buzzvel",
  description: "The next Buzzvel developer",
  keywords: ['Web developer', 'React', 'JavaScript'],
  creator: 'Rafael DFB',
  category: 'technology',
  openGraph: {
    title: "Rafael at Buzzvel",
    description: "The next Buzzvel developer",
    url: "https://your-site-url.com", // Replace with your actual site URL
    image: "/images/og-image.png", // Path to your OG image
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${raleway.variable} ${roboto.variable}`}>
      <body className="md:px-0 min-h-screen h-full">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
