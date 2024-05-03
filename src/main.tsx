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
          colorText: "#FFFFFF",
        },
      }}
    >
      <WrapperLayout />
    </ConfigProvider>
  </StrictMode>,
);
