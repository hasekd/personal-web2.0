import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import chakraTheme from "../styles/theme";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Metadata from "../components/Layout/Metadata";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Metadata
        title="Daniel Hasek | Frontend Developer & Designer"
        description="Frontend developer that loves to code and make clean, simple and beautiful design patterns"
      />
      <ChakraProvider theme={chakraTheme}>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </>
  );
}
