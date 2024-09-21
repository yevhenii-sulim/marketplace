import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { productForProductPage } from '../../../redux/productPage/selectors';
import { selectBasket } from '../../../redux/basket/select';
import { addProduct } from '../../../redux/basket/slice';
import { createPortal } from 'react-dom';
import BasketModal from 'components/BasketModal/BasketModal';
import { WrapperAllValue, WrapperNameAndValue } from './DescribeInfo.styled';

const modalEnter = document.querySelector('#modal');

function DescribeInfo({ showAccordion, sizeWindow }) {
  const product = useSelector(productForProductPage);
  const [isOpen, setIsOpen] = useState(false);
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();

  useEffect(() => {
    const body = document.querySelector('body');
    const widthScroll = window.innerWidth - body.offsetWidth;

    if (isOpen) {
      body.style.paddingRight = `${widthScroll}px`;
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'unset';
    }

    return () => {
      body.style.paddingRight = '0';
      body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const sendIdProduct = () => {
    if (!product) return;
    setIsOpen(true);

    for (const item of basket) {
      if (item.id === product._id) return;
    }

    const productAdded = {
      id: product._id,
      title: product.title,
      price: product.price,
      img: product.img[0],
      discount: product.discount,
      discountPrice: product.discountPrice,
      count: 1,
      category: product.category.mainCategory,
      subCategory: product.subCategory
        ? product.subCategory.subCategory
        : undefined,
    };

    dispatch(addProduct(productAdded));
  };

  return (
    <>
      {showAccordion ? (
        <>
          <WrapperAllValue>
            <WrapperNameAndValue>
              <ProductName>
                <ProductNameWrapper>{product?.title}</ProductNameWrapper>
              </ProductName>
              <DescribeInfoValue />
            </WrapperNameAndValue>
            <ProductCostSection product={product} />
          </WrapperAllValue>
          <ButtonBlock
            sendIdProduct={sendIdProduct}
            tel={product.producer.numberPhone}
            showAccordion={showAccordion}
          />

          <Accordion sx={accordionStyles} disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header-1"
              sx={summaryStyles}
            >
              Опис
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <DescribeInfoContent
                describe={product?.describe}
                showAccordion={showAccordion}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyles} disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel1-header-2"
              sx={summaryStyles}
            >
              Продавець
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <SellerInfo showAccordion={showAccordion} />
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={accordionStyles}
            disableGutters
            disabled={!product?.comments.length}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel1-header-3"
              sx={summaryStyles}
            >
              Відгуки
            </AccordionSummary>
            <AccordionDetails sx={{ paddingBottom: '24px' }}>
              <Comments sizeWindow={sizeWindow} />
            </AccordionDetails>
          </Accordion>

          {isOpen &&
            createPortal(<BasketModal setIsOpen={setIsOpen} />, modalEnter)}
        </>
      ) : (
        <DescribeInfoContent
          parameters={product?.parameters}
          describe={product?.describe}
        />
      )}
    </>
  );
}

export default DescribeInfo;
