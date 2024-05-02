import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";

import { WrapperLayout } from "./WrapperLayout.tsx";

import "./index.css";

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 2,
          // Alias Token
          colorBgContainer: "#1B1B1B",

          // Seed Token
          colorPrimary: "#00b96b",
        },
      }}
    >
      <WrapperLayout />
    </ConfigProvider>
  </StrictMode>,
);
