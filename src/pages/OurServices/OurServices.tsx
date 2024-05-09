import { Divider } from "antd";

import {
  TextShadow,
  TitleShadow,
} from "@components/TextComponents/TypographyStyled.ts";

import {
  ListServices,
  Services,
  TextService,
  WrapperServices,
} from "./OurServices.styled.ts";

export const OurServices = () => (
  <WrapperServices vertical>
    <TitleShadow level={2}>
      НАШИ УСЛУГИ
      <br /> И СХЕМА РАБОТЫ
    </TitleShadow>
    <Divider />

    <TextShadow>
      В любом количестве вывезем отходы 1-4 класса опасности.
    </TextShadow>
    <ListServices>
      <Services>
        <TextService level={3}>СБОР</TextService>
      </Services>
      <Services>
        <TextService $gray={true} level={3}>
          ОБРАБОТКА
        </TextService>
      </Services>
      <Services>
        <TextService level={3}>ТРАНСПОРТИРОВАНИЕ</TextService>
      </Services>
      <Services>
        <TextService $gray={true} level={3}>
          ОБЕЗВРЕЖИВАНИЕ
        </TextService>
      </Services>
      <Services>
        <TextService level={3}>УТИЛИЗАЦИЯ</TextService>
      </Services>
    </ListServices>
  </WrapperServices>
);
