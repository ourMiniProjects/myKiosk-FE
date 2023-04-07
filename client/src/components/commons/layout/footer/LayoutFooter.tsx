import * as S from "./LayoutFooter.styles";

export default function LayoutFooter() {
  return (
    <>
      <S.Wrapper>
        <S.InnerWrapper>
          <S.FooterLeftBox>
            <S.Title>MyKiosk®</S.Title>
            <S.Text2>
              Introducing kiosks! By implementing kiosks, you can provide cost
              savings and convenient services. <br />
              With our kiosk, experience fast service, and improve efficiency!
              Increase customer satisfaction and drive sales growth.
            </S.Text2>
            <S.Text2>
              (주) Team MyKiosk | 사업자번호 123-45-67890 <br />
              직업정보제공사업 신고번호 2023-서울마포-0000 | 주소 서울특별시
              마포구 광성로 00길 11, 01호 (마이키오스크) <br />
              전화 1544-0000 | 고객문의 cs@myKioskservice.com
            </S.Text2>
          </S.FooterLeftBox>
        </S.InnerWrapper>
        <S.FooterRightBox>
          <S.TextBox>
            <S.Text1>PRODUCT</S.Text1>
            <S.Text1>SHOP</S.Text1>
            <S.Text1>CONTACT</S.Text1>
          </S.TextBox>
          <S.SnsIconBox>
            <S.FacebookIcon />
            <S.TwitterIcon />
            <S.InstagramIcon />
            <S.YoutubeIcon />
          </S.SnsIconBox>
        </S.FooterRightBox>
      </S.Wrapper>
      <S.BottomTextBox>© 2023 MYKIOSK Inc. All rights reserved</S.BottomTextBox>
    </>
  );
}
