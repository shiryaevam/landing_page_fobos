import { Carousel } from "antd";

import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import { TitleShadow } from "@components/TextComponents/TypographyStyled.ts";

import {
  EmployeeCard,
  WelcomeEmployees,
  WrapperEmployees,
} from "./Employees.styled.ts";

const SampleNextArrow = (properties: never) => {
  const { className, onClick, style } = properties;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={className}
      // @ts-expect-error исправить
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <RightCircleTwoTone />
    </div>
  );
};
// eslint-disable-next-line unicorn/prevent-abbreviations
const SamplePrevArrow = (properties: never) => {
  const { className, onClick, style } = properties;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={className}
      // @ts-expect-error исправить
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <LeftCircleTwoTone />
    </div>
  );
};

export const Employees = () => (
  <WrapperEmployees vertical align={"center"}>
    <WelcomeEmployees align="end">
      <TitleShadow level={2}>Наши сотрудники</TitleShadow>
    </WelcomeEmployees>
    <Carousel
      // @ts-expect-error исправить
      nextArrow={<SampleNextArrow />}
      // @ts-expect-error исправить
      prevArrow={<SamplePrevArrow />}
      arrows
      className="employees-carousel"
      adaptiveHeight={true}
    >
      <div className="wrapper-cards-employees">
        <EmployeeCard>
          <h3>Hello</h3>
        </EmployeeCard>
        <EmployeeCard>
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            height="100%"
            width="100%"
          />
        </EmployeeCard>
        <EmployeeCard>
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            height="100%"
            width="100%"
          />
        </EmployeeCard>
        <EmployeeCard>
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            height="100%"
            width="100%"
          />
        </EmployeeCard>
      </div>
      <div style={{ width: 200 }}>
        <p>200</p>
      </div>
      <div style={{ width: 75 }}>
        <p>75</p>
      </div>
      <div style={{ width: 300 }}>
        <p>300</p>
      </div>
      <div style={{ width: 225 }}>
        <p>225</p>
      </div>
      <div style={{ width: 175 }}>
        <p>175</p>
      </div>
    </Carousel>
  </WrapperEmployees>
);
