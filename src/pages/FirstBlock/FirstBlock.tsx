import { theme } from "antd";

import imageJPG from "@assets/FirstBlock/10_big 1.jpg";
import imagePng from "@assets/FirstBlock/10_big 1.png";
import { SpanStyled } from "@components/TextComponents/SpanStyled.ts";

import {
  BackGroundFilter,
  FirstBlockTittle,
  FirstBlockTittleDescription,
  FirstBlockWrapperStyled,
} from "./FirstBlock.styled.ts";

const { useToken } = theme;

export const FirstBlock = () => {
  const { token } = useToken();

  return (
    <FirstBlockWrapperStyled>
      <BackGroundFilter vertical={true} justify="center">
        <FirstBlockTittle>ФОБОС</FirstBlockTittle>
        <FirstBlockTittleDescription level={3}>
          Сбор, <SpanStyled>обработка,</SpanStyled> транспортирование,
          <SpanStyled> обезвреживание,</SpanStyled> утилизация отходов
          <br />
          <SpanStyled>1- 4 класса</SpanStyled> опасности.
        </FirstBlockTittleDescription>
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
