import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";

import { WrapperLayout } from "./WrapperLayout.tsx";

import "./index.css";

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorBgContainer: "#037F30",
            colorPrimaryActive: "rgba(2,255,94,0.75)",
            colorPrimaryHover: "rgba(2,255,94,0.82)",
            contentFontSize: 20,
            defaultGhostColor: "#ffffff",
          },
          Layout: {
            bodyBg: "#1b1b1b",
          },
        },
        token: {
          colorSplit: "#FFFFFF",
          colorText: "#FFFFFF",
          fontSize: 16,
          fontSizeHeading1: 60,
          fontSizeHeading2: 40,
          fontSizeHeading3: 30,
        },
      }}
    >
      <WrapperLayout />
    </ConfigProvider>
  </StrictMode>,
);
