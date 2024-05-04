import { Flex } from "antd";
import styled from "styled-components";

import { TitleShadow } from "@components/TextComponents/TypographyStyled.ts";

export const WrapperServices = styled(Flex)`
  height: 100dvh;
  padding: 20% 12px 0;
`;
export const ListServices = styled.ul``;

export const Services = styled.li`
  &::marker {
    color: white;
    font-size: 30px;
  }
`;

export const TextService = styled(TitleShadow)<{ gray?: boolean }>`
  &&& {
    margin: 0;
    color: ${({ gray }) => (gray ? "#ffffff99" : "white")};
  }
`;
