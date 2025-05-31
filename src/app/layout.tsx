import "../styles/index.css";
import type { Metadata } from "next";
import { Navbar } from "@/layout";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Realestate",
  description: "Realestate Website",
  icons: "/images/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black `}>
        <ReduxStoreProvider>
          <ReactQueryProvider>
            <Theme>
              <Navbar />
              <div className="container min-h-screen max-w-screen-2xl">
                {children}
              </div>
              {/* <Footer /> */}
            </Theme>
          </ReactQueryProvider>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}

import { ReactQueryProvider, ReduxStoreProvider, Theme } from "@/providers";
