import { Button, Flex } from "antd";
import styled from "styled-components";

import { TitleShadow } from "@components/TextComponents/TypographyStyled.ts";

export const AboutUsWrapper = styled(Flex)`
  min-height: 100dvh;
  padding: 10% 12px;
`;

export const AboutUsDescription = styled(TitleShadow)`
  letter-spacing: -0.08em;
`;

export const ButtonDetails = styled(Button)`
  height: 68px;

  &&& {
    border-radius: 60px;
  }
`;
