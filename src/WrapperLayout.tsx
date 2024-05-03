import { createElement, useLayoutEffect, useState } from "react";
import { Grid, Menu } from "antd";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { AboutUs } from "./pages/AboutUs/AboutUs.tsx";
import { FirstBlock } from "./pages/FirstBlock/FirstBlock.tsx";
import { Wrapper, WrapperSider } from "./WrapperLayout.styled.ts";

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  icon: createElement(icon),
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const { useBreakpoint } = Grid;

export const WrapperLayout = () => {
  const breakpoints = useBreakpoint();

  const [defaultCollapsed, setDefaultCollapsed] = useState(true);

  useLayoutEffect(() => {
    if (breakpoints) {
      setDefaultCollapsed(
        !Object.entries(breakpoints).reduce(
          (accumulator, entries) => accumulator || entries[1],
          false,
        ),
      );
    }
  }, [breakpoints]);

  return (
    <Wrapper hasSider={true}>
      <WrapperSider
        breakpoint="md"
        collapsedWidth="0"
        defaultCollapsed={defaultCollapsed}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </WrapperSider>
      <FirstBlock />
      <AboutUs />
    </Wrapper>
  );
};
