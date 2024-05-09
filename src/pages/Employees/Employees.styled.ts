import { Flex } from "antd";
import styled from "styled-components";

export const WrapperEmployees = styled(Flex)`
  height: 100dvh;
  .employees-carousel {
    color: white;
    width: 100vw;
    height: 50dvh;
    position: relative;
    padding: 60px 20px 50px 20px;
    .slick-prev {
      left: 10px;
    }
    .slick-next {
      right: 10px;
    }
    .slick-arrow {
      span {
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
    .slick-list {
      height: 100%;
    }
    .wrapper-cards-employees {
      display: flex !important;
      flex-direction: row;
      align-content: space-between;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

    }
    .slick-dots-bottom {
      bottom: 50px;
    }
  }
`;

export const WelcomeEmployees = styled(Flex)`
  background-color: #101010;
  height: 50%;
  width: 100%;
  padding: 27px 24px;
`;

export const EmployeeCard = styled.div`
  margin: 10px;
  width: 40%;
  height: 103px;
  border-radius: 20%;
  overflow: hidden;
  background-color: #037f30;
  min-width: 100px;
  //background-clip: border-box;
  //background-clip: padding-box;
  //background-clip: content-box;
  //background-clip: text;
  //
  ///* Global values */
  //background-clip: inherit;
  //background-clip: initial;
  //background-clip: revert;
  //background-clip: revert-layer;
  //background-clip: unset;
`;
