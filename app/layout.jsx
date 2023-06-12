import localFont from "next/font/local";

import Nav from "./components/Nav";

import "./styles/app.scss";

const nunito = localFont({
  src: [
    {
      path: "./fonts/Nunito-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
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
        <Nav />
        {children}
      </body>
    </html>
  );
}
