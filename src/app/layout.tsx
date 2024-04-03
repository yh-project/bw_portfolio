import Nav from "@/components/Nav";
import SideMenu from "@/components/SideMenu";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | BluewhaleYH",
    default: "Welcome!!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>
        <div>
          <Nav />
          <div className="w-[1200px] max-w-[1200px] mx-auto flex justify-between mt-5">
            <SideMenu />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
