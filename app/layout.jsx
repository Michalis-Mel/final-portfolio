// app/layout.jsx
import "./styles/app.scss";
import { ClientRootLayout } from "./client-layout";

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
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
