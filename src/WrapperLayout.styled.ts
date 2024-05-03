import { Layout } from "antd";
import styled from "styled-components";

const { Sider } = Layout;

export const Wrapper = styled.div`
  min-height: 100dvh;
`;

export const WrapperSider = styled(Sider)`
  height: 100vh;
  overflow: visible;
  position: fixed;
  z-index: 5;
  top: 0;
`;
