import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globalStyles";
import { CartProvider } from "../src/components/commons/cart/CartContext";
import Layout from "../src/components/commons/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </Layout>
    </>
  );
}

// CartProvider - 장바구니..
