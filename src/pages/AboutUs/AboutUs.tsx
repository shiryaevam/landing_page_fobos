import { Divider, Flex, Typography } from "antd";

import { SpanStyled } from "@components/TextComponents/SpanStyled.ts";
import { TitleShadow } from "@components/TextComponents/TypographyStyled.ts";

import {
  AboutUsDescription,
  AboutUsWrapper,
  ButtonDetails,
} from "./AboutUs.styled.ts";

const { Text } = Typography;

export const AboutUs = () => (
  <AboutUsWrapper justify="space-around" vertical={true}>
    <Flex vertical>
      <TitleShadow level={2}>О НАС</TitleShadow>
      <Divider />
      <Text>Мы существуем на рынке уже более 10 лет.</Text>
    </Flex>
    <AboutUsDescription level={2}>
      МЫ
      <br /> <SpanStyled>ЗАБОТИМСЯ</SpanStyled> <br />О ПРИРОДЕ <br />
      <SpanStyled>И ОКРУЖАЮЩЕЙ</SpanStyled> СРЕДЕ.
    </AboutUsDescription>
    <ButtonDetails ghost>ПОДРОБНЕЕ</ButtonDetails>
  </AboutUsWrapper>
);
