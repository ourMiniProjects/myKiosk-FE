import { useRouter } from "next/router";
import styled from "styled-components";
import LayoutHeader from "./header/LayoutHeader.container";

const Wrapper = styled.div`
  display: flex;
`;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  return (
    <>
      <Wrapper>
        <div style={{ width: "70%" }}>
          <LayoutHeader />
          {props.children}
        </div>
        <div style={{ width: "30%" }}></div>
      </Wrapper>
    </>
  );
}
