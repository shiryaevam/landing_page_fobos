import { Flex } from "antd";
import styled from "styled-components";

import { TitleShadow } from "@components/TextComponents/TypographyStyled.ts";

export const FirstBlockWrapperStyled = styled.div`
  min-height: 100dvh;
  width: 100%;
  position: relative;
`;

export const BackGroundFilter = styled(Flex)`
  background: #0303037f;
  height: 100dvh;
  position: absolute;
  width: 100%;
  padding: 0 72px 0 12px;
`;

export const FirstBlockTittle = styled(TitleShadow)`
  && {
    margin: 0;
  }
`;

export const FirstBlockTittleDescription = styled(TitleShadow)`
  && {
    line-height: 1;
    letter-spacing: -0.08em;
  }
`;
