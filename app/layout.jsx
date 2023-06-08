import { Nunito, Space_Mono } from "next/font/google";

import "./styles/app.scss";

export const nunito = Nunito({
  subsets: ["latin"],
});

export const space_mono = Space_Mono({
  weight: "700",
  subsets: ["latin"],
});

export const metadata = {
  title: "M² Portfolio",
  description:
    "Welcome to my space-themed portfolio! As a front-end developer specializing in Next.js 13 and SCSS, I have crafted a captivating digital universe that showcases my skills and projects. ",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
    "space",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
