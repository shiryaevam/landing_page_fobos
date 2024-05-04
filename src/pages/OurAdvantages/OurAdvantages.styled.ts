import { Col, Flex, Typography } from "antd";
import styled from "styled-components";

export const WrapperOurAdvantages = styled(Flex)`
  min-height: 100dvh;
  width: 100%;
  position: relative;
`;

export const Advantages = styled(Flex)`
  background-color: #037f30;
  height: 50dvh;
`;
export const AdvantageCol = styled(Col)`
  height: 50%;
`;

export const AdvantageCard = styled(Flex)`
  height: 100%;
`;

export const BackgroundFilterAdvantage = styled(Flex)`
  height: 50vh;
  width: 100%;
`;
export const BackgroundFilterAdvantagesasd = styled(Flex)`
  background-color: rgba(3, 3, 3, 0.5);
  height: 50vh;
  width: 100%;
  position: absolute;
  top: 0;
  padding: 26px 15px;
  &&& {
    letter-spacing: -0.08em;
  }
`;

const { Text } = Typography;

export const TextAdvantage = styled(Text)`
  color: #1b1b1b33;
  font-size: 100px;
`;
