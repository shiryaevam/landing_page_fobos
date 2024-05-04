import { Flex, theme, Typography } from "antd";

import imageJPG from "@assets/Advantages/8_big 2.jpg";
import imagePng from "@assets/Advantages/8_big 2.png";

import {
  AdvantageCard,
  AdvantageCol,
  Advantages,
  BackgroundFilterAdvantage,
  BackgroundFilterAdvantagesasd,
  TextAdvantage,
  WrapperOurAdvantages,
} from "./OurAdvantages.styled.ts";

const { Title } = Typography;
const { useToken } = theme;

export const OurAdvantages = () => {
  const { token } = useToken();

  return (
    <WrapperOurAdvantages vertical>
      <BackgroundFilterAdvantage>
        <img
          srcSet={`${imageJPG} 200w, ${imagePng}  700w `}
          alt="MDN"
          sizes={`(max-width: ${token.screenMD}px) 1600px,
         1500x, (min-width: ${token.screenXS}px) 100%,
         50vh`}
          height="100%"
          width="100%"
          style={{ display: "block", objectFit: "cover" }}
        />
      </BackgroundFilterAdvantage>
      <BackgroundFilterAdvantagesasd align={"flex-end"}>
        <Title level={2}>НАШИ ПРЕИМУЩЕСТВА</Title>
      </BackgroundFilterAdvantagesasd>
      <Advantages flex={"max-content"}>
        <Flex wrap={"wrap"}>
          <AdvantageCol span={12}>
            <AdvantageCard align="center" justify="center">
              <TextAdvantage strong>01</TextAdvantage>
            </AdvantageCard>
          </AdvantageCol>
          <AdvantageCol span={12}>
            <AdvantageCard align="center" justify="center">
              <TextAdvantage strong>02</TextAdvantage>
            </AdvantageCard>
          </AdvantageCol>
          <AdvantageCol span={12}>
            <AdvantageCard align="center" justify="center">
              <TextAdvantage strong>03</TextAdvantage>
            </AdvantageCard>
          </AdvantageCol>
          <AdvantageCol span={12}>
            <AdvantageCard align="center" justify="center">
              <TextAdvantage strong>04</TextAdvantage>
            </AdvantageCard>
          </AdvantageCol>
        </Flex>
      </Advantages>
    </WrapperOurAdvantages>
  );
};
