import { Geist, Geist_Mono, Atma } from "next/font/google";
import "./globals.css";

import Navbar from "../../Components/navbar/navbar";

const atmaSans = Atma({
  weight: "300",
  subsets: ["latin"],
});

export const metadata = {
  title: "Headbook",
  description: "A practise knockoff social media app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${atmaSans.variable} antialiased`}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
