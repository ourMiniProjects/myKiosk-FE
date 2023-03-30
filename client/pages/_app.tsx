import type { AppProps } from "next/app";
import { CartProvider } from "../src/components/commons/cart/CartContext";
import Layout from "../src/components/commons/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </Layout>
    </>
  );
}

// CartProvider - 장바구니..
