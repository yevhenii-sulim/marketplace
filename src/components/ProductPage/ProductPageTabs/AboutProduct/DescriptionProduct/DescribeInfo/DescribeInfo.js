import React from 'react';
import {
  DescribeInfoComplaint,
  DescribeInfoComplaintBlock,
  DescribeInfoContainer,
  DescribeInfoHeader,
  DescribeInfoParagraph,
  DescribeInfoState,
  DescribeInfoWrapper,
} from './DescribeInfo.styled';

function DescribeInfo() {
  return (
    <DescribeInfoWrapper>
      <DescribeInfoContainer>
        <DescribeInfoHeader>Опис</DescribeInfoHeader>
        <DescribeInfoState>
          Стан: <span style={{ fontWeight: 400 }}>нове</span>
        </DescribeInfoState>
        <DescribeInfoParagraph>
          Насолоджуйтесь кришталево чистим звуком та бездоганним комфортом з
          нашими передовими бездротовими навушниками. Використовуючи передову
          технологію звукового відтворення, ці навушники відтворюють кожну ноту
          з неймовірною ясністю та глибиною, переносячи вас у світ музики з
          новими емоціями. Зручна конструкція з м'якими амбушурами та
          регульованим облямовуванням дозволяє насолоджуватися бездоганним
          звуком протягом годин без будь-якого дискомфорту. Вбудований
          акумулятор забезпечує довгу автономну роботу, що робить ці навушники
          ідеальними для використання вдома, в дорозі або під час активного
          спорту.
        </DescribeInfoParagraph>
        <DescribeInfoComplaintBlock>
          <DescribeInfoComplaint>Поскаржитися</DescribeInfoComplaint>
        </DescribeInfoComplaintBlock>
      </DescribeInfoContainer>
    </DescribeInfoWrapper>
  );
}

export default DescribeInfo;
