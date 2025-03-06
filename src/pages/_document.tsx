import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="bg-background text-copy selection:bg-copy-lighter">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
