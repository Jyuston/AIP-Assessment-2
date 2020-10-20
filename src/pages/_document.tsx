import React from "react";
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/core";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Sora:wght@300;400;500;700;800&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body style={{ marginBottom: "4rem" }}>
          {/* 👇 Color mode script for SSR */}
          {/* See https://next.chakra-ui.com/docs/features/color-mode#with-nextjs */}
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
