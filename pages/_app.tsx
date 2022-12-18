import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";
import chakraTheme from "../styles/theme";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={chakraTheme}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ChakraBaseProvider>
  );
}
