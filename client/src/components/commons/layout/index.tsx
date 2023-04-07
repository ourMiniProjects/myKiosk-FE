import { useRouter } from "next/router";
import styled from "styled-components";
import LayoutFooter from "./footer/LayoutFooter";
import LayoutHeader from "./header/LayoutHeader.container";
// import CartList from "../cart/CartList.container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = router.pathname === "/menu";
  const isHiddenFooter =
    router.pathname === "/order-complete" || router.pathname === "/admin";

  return (
    <>
      <Wrapper>
        <div style={{ width: "100%" }}>
          {!isHiddenHeader && <LayoutHeader />}
          {props.children}
        </div>
        {!isHiddenFooter && <LayoutFooter />}
      </Wrapper>
    </>
  );
}
