import { useRouter } from "next/router";
import styled from "styled-components";
import LayoutHeader from "./header/LayoutHeader.container";
// import CartList from "../cart/CartList.container";

const Wrapper = styled.div`
  display: flex;
`;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = router.pathname === "/menu";

  return (
    <>
      <Wrapper>
        <div style={{ width: "100%" }}>
          {!isHiddenHeader && <LayoutHeader />}
          {props.children}
        </div>
        {/* <div style={{ width: "30%" }}>
          <CartList />
        </div> */}
      </Wrapper>
    </>
  );
}
