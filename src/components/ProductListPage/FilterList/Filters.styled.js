import styled from 'styled-components';
import { Form as FormContainer } from 'formik';

export const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

export const Form = styled(FormContainer)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
