import { Layout } from "antd";
import styled from "styled-components";

const { Sider } = Layout;

export const Wrapper = styled(Layout)`
  min-height: 100dvh;
`;

export const WrapperSider = styled(Sider)`
  display: block;
  position: fixed;
  z-index: 5;
  left: 0;
  top: 100px;
  overflow: visible;
`;
