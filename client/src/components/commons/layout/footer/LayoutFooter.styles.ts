import styled from "@emotion/styled";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

export const Wrapper = styled.div`
  display: flex;
  height: 180px;
  margin: 30px 50px 15px 50px;
  border-bottom: solid 1px #cbcbcb;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;
`;

export const FooterLeftBox = styled.div`
  width: 80%;
  font-size: 12pt;
  letter-spacing: 0.7px;
  color: #a9acab;
`;

export const FooterRightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-right: 5px;
  font-size: 12pt;
  letter-spacing: 0.7px;
  color: #a9acab;
`;

export const BottomTextBox = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 50px;
  margin-bottom: 100px;
  font-size: 10pt;
  letter-spacing: 0.7px;
  color: #a9acab;
`;

export const Title = styled.div`
  font-size: 15pt;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 12px;
`;

export const TextBox = styled.div`
  display: flex;
  margin-right: 5px;
  font-size: 10pt;
  letter-spacing: 2px;
  font-family: "Roboto-Regular";
  font-weight: 600;
  color: #a4a4a4;
`;

export const Text1 = styled.div`
  margin-left: 30px;
`;
export const Text2 = styled.div`
  font-size: 10pt;
  margin-bottom: 20px;
`;

export const SnsIconBox = styled.div`
  display: flex;
  justify-content: end;
  padding: 10px;
  margin-top: 20px;
  font-size: 25px;
  color: #a3a3a3;
`;

export const FacebookIcon = styled(AiFillFacebook)`
  margin-left: 25px;
`;

export const TwitterIcon = styled(BsTwitter)`
  margin-left: 25px;
`;

export const InstagramIcon = styled(FiInstagram)`
  margin-left: 25px;
`;

export const YoutubeIcon = styled(BsYoutube)`
  margin-left: 25px;
`;
