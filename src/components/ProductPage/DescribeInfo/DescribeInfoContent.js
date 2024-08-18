import {
  DescribeInfoComplaint,
  DescribeInfoComplaintBlock,
  DescribeInfoContainer,
  DescribeInfoHeader,
  DescribeInfoParagraph,
  DescribeInfoWrapper,
} from './DescribeInfo.styled';
import DescribeInfoValue from './DescribeInfoValue';

export default function DescribeInfoContent({ describe, showAccordion }) {
  return (
    <DescribeInfoWrapper>
      <DescribeInfoContainer>
        <DescribeInfoHeader>Опис</DescribeInfoHeader>
        {showAccordion ? null : <DescribeInfoValue />}
        <DescribeInfoParagraph>{describe}</DescribeInfoParagraph>
        <DescribeInfoComplaintBlock>
          <DescribeInfoComplaint>Поскаржитися</DescribeInfoComplaint>
        </DescribeInfoComplaintBlock>
      </DescribeInfoContainer>
    </DescribeInfoWrapper>
  );
}
