import styled from 'styled-components';
import { Form as FormContainer } from 'formik';

export const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const Form = styled(FormContainer)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
