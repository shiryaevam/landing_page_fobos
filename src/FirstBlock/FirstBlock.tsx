import { theme, Typography } from "antd";

import imageJPG from "@assets/FirstBlock/10_big 1.jpg";
import imagePng from "@assets/FirstBlock/10_big 1.png";

import {
  BackGroundFilter,
  FirstBlockWrapperStyled,
} from "./FirstBlock.styled.ts";

const { useToken } = theme;
const { Title } = Typography;

export const FirstBlock = () => {
  const { token } = useToken();

  return (
    <FirstBlockWrapperStyled>
      <BackGroundFilter>
        <Title>h1. Ant Design</Title>
      </BackGroundFilter>
      <picture>
        <source srcSet={imagePng} media={`(min-width: ${token.screenMD}px)`} />
        <img
          src={imageJPG}
          alt="MDN"
          sizes={`(max-width: ${token.screenMD}px) 430px,
         932px`}
          height="100%"
          width="100%"
        />
      </picture>
    </FirstBlockWrapperStyled>
  );
};
