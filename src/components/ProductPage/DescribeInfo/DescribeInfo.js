import React from 'react';
import { useSelector } from 'react-redux';
import DescribeInfoContent from './DescribeInfoContent';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  ProductName,
  ProductNameWrapper,
} from '../OrderSection/OrderSection.styled';
import DescribeInfoValue from './DescribeInfoValue';
import ProductCostSection from '../OrderSection/ProductCost';
import ButtonBlock from '../OrderSection/ButtonBlock/ButtonBlock';
import { accordionStyles, summaryStyles } from './styles';
import SellerInfo from '../SellerInfo/SellerInfo';
import Comments from '../Comments/Comments';

function DescribeInfo({ showAccordion }) {
  const product = useSelector(state => state.productPage.product);

  return (
    <>
      {showAccordion ? (
        <>
          <ProductName>
            <ProductNameWrapper>{product.title}</ProductNameWrapper>
          </ProductName>
          <DescribeInfoValue />
          <ProductCostSection product={product} />
          <ButtonBlock showAccordion={showAccordion} />
          <Accordion sx={accordionStyles} disableGutters={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={summaryStyles}
            >
              Опис
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: 0,
              }}
            >
              <DescribeInfoContent
                describe={product.describe}
                showAccordion={showAccordion}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={accordionStyles} disableGutters={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={summaryStyles}
            >
              Продавець
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: 0,
              }}
            >
              <SellerInfo showAccordion={showAccordion} />
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={accordionStyles}
            disableGutters={true}
            disabled={!product.comments.length}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={summaryStyles}
            >
              Відгуки
            </AccordionSummary>
            <AccordionDetails
              sx={{
                paddingBottom: '24px',
              }}
            >
              <Comments />
            </AccordionDetails>
          </Accordion>
        </>
      ) : (
        <DescribeInfoContent
          parameters={product.parameters}
          describe={product.describe}
        />
      )}
    </>
  );
}
export default DescribeInfo;
