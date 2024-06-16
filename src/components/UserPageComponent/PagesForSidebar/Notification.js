import React from 'react';
import { ContainerNotification, Empty } from './PagesForSidebar.styled';
import MessagePageSvg from 'SvgComponents/MessagePageSvg/MessagePageSvg';

export default function Notification() {
  return (
    <ContainerNotification>
      <Empty>
        <MessagePageSvg />
        <p>
          Тут будуть повідомлення щодо ваших товарів та покупок. Щоб почати
          листування, оберіть необхідний товар та натисність кнопку
          “Повідомлення”.
        </p>
      </Empty>
    </ContainerNotification>
  );
}
