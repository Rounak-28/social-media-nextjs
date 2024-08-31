import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedOut>
            <div className="w-full h-screen flex flex-col justify-center items-center">
              <div>Sign in to continue...</div>
              <div className="w-48 h-10 flex justify-center items-center rounded bg-blue-500 text-white">
                <SignInButton />
              </div>
            </div>
          </SignedOut>
          <SignedIn>
            {children}
            <Footer />
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
