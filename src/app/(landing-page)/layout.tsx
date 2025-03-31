import { ConvexClientProvider } from "@/components/convex-client-provider";
import "@/lib/globals.css";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Reymart Marfil",
  description: "Reymart Marfil is a platform to connect clients with Reymart for seamless assistance and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body
          className={`${poppinsFont.className} antialiased flex flex-col min-h-screen mx-auto`}
        >
          <ConvexClientProvider>
       
            {children}
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
