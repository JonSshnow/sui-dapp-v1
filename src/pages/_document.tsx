import Footer from "@/components/footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
