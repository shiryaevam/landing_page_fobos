import { createElement } from "react";
import { Layout, Menu, theme } from "antd";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Content, Footer, Header, Sider } = Layout;

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

export const WrapperLayout = () => {
  const {
    token: { borderRadiusLG, colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ background: colorBgContainer, padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              minHeight: 360,
              padding: 24,
            }}
          >
            content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
