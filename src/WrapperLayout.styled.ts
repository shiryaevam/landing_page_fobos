import { Layout } from "antd";
import styled from "styled-components";

const { Sider } = Layout;

export const Wrapper = styled(Layout)`
  &&& {
    flex-direction: column;
    min-height: 100dvh;
  }
`;

export const WrapperSider = styled(Sider)`
  &&& {
    display: block;
    z-index: 5;
    left: 0;
    overflow: visible;
    bottom: 0;
    height: 100dvh;
    position: fixed;
    top: 0;
  }
`;
