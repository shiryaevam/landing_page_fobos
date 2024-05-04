import { Typography } from "antd";
import styled from "styled-components";

const { Text, Title } = Typography;

export const TitleShadow = styled(Title)`
  text-shadow: 0 4px 4px #00000040;
  letter-spacing: -0.08em;
`;

export const TextShadow = styled(Text)`
  text-shadow: 0 4px 4px #00000040;
`;
