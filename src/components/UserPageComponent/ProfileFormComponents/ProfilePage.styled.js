import styled from 'styled-components';
import { theme } from 'utils/theme';

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding: unset;
  }
`;

export const PersonalDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const UserFieldName = styled.div``;
export const FormContainer = styled.div`
  width: 100%;
  display: ${props => (props.$redacting ? 'unset' : 'flex')};
  gap: ${props => props.$gap || 'unset'};
  justify-content: ${props => props.$justifycontent || 'start'};

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 100%;
    display: flex;
    gap: ${props => props.$gap || '74px'};
    justify-content: ${props => props.$justifycontent || 'start'};
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    flex-direction: row;
  }
`;

export const ProfilePageTitle = styled.h5`
  font-weight: 400;
  font-size: 28px;
  font-family: 'Jost';
  line-height: 42px;
`;

export const InputColumn = styled.div`
  align-items: ${props => (props.$setitemscenter ? 'center' : 'unset')};
  display: flex;
  flex-direction: column;
  gap: 24px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.sx}) {
    justify-self: center;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    justify-content: unset;
  }
`;
export const Image = styled.div`
  img {
    height: 172px;
    width: auto;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.sx}) {
    justify-self: center;
  }
`;
export const ContainerName = styled.div`
  display: grid;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.sx}) {
    margin: auto;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.sx}) {
    margin: auto;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin: auto;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const styleData = {
  '&>div': {
    display: 'flex',
    justifyContent: 'space-between',
    border: `1px solid ${theme.color.bgLabelDelivery}`,
  },
  '& input': {
    height: '100%',
  },
  '& fieldset': {
    border: 'none',
  },
};
export const FormField = styled.div`
  width: ${props => props.$width || '100%'};
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: #000;
    font: 600 18px 'Nunito Sans';
    line-height: 26px;
    &:after {
      content: '${props => (props.required ? '*' : '')}';
      color: #ff0000;
    }
  }
  .error {
    color: ${({ theme }) => theme.color.colorTextErrorForm};
  }
  p {
    color: #000;
    font: 600 18px 'Nunito Sans';
    line-height: 26px;
  }

  input,
  select {
    display: block;
    width: 100%;
    height: 44px;
    border: 1px solid #8d8d8d;
    border-radius: 6px;
    padding: 12px;
    background-color: #fafafa;
    font: 400 16px 'Nunito Sans';
    line-height: 20px;
    outline: none;
  }

  span {
    font: 400 16px 'Nunito Sans';
    line-height: 20px;
  }

  input:focus {
    border: 3px solid #43c550;
    box-shadow: 0.3px 0.3px 5px 0px #43c550;
  }

  option {
    font: 400 16px 'Nunito Sans';
    line-height: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: ${props => props.$width || '100%'};

    input,
    select {
      width: ${props => props.$inputwidth || '100%'};
    }
  }
`;

export const RedactContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breakPoints.mx}) {
    justify-content: flex-end;
  }
`;

export const RedactButton = styled.button`
  width: 148px;
  height: 44px;
  border-radius: 6px;
  background-color: #43c550;
  font: 800 18px 'Nunito Sans';
  color: #fff;
  line-height: 26px;
`;

export const CancelRedactingButton = styled.button`
  width: 148px;
  height: 44px;
  border-radius: 6px;
  background-color: #fff;
  font: 800 18px 'Nunito Sans';
  color: #43c550;
  border: 1px solid #43c550;
  line-height: none;
`;

export const DateInput = styled.div`
  .MuiInputBase-root {
    height: 44px;
    background-color: #fafafa;
  }

  .MuiInputBase-input {
    width: 260px;
    border: none;
    padding: 0;
    padding-left: 10px;
  }

  .MuiInputBase-root > input:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }

  .MuiFormControl-root {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    .MuiFormControl-root {
      width: 21.4vw;
    }
  }
`;

export const ProfilePictureSelectField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.$redacting ? 'center' : 'flex-start')};
  justify-content: center;
  gap: 25px;

  img {
    width: 123px;
    height: 123px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  input {
    &::file-selector-button {
      background-color: transparent;
      border: none;
      font: 600 18px 'Nunito Sans';
      cursor: pointer;
    }

    &:invalid {
      display: none;
    }
  }
`;

export const ProfilePictureSelectInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  cursor: pointer;

  input {
    z-index: 1;
    position: absolute;
    opacity: 0;
    left: 0;
    width: 100%;
  }
`;

export const ProfilePictureDefault = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 50%;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.sx}) {
    width: 123px;
    height: 123px;
  }
`;

export const ProfilePicture = styled.img`
  width: 123px;
  height: 123px;
  object-fit: cover;
  object-position: center;
  border: 1px solid #000;
  border-radius: 50%;
`;

export const PasswordInput = styled.div`
  position: relative;
  display: flex;
  gap: 5px;

  input {
    width: 100%;
    padding-left: 45px;
  }

  button {
    background: transparent;
    width: 44px;
    height: 44px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    .input {
      width: 320px;
    }
  }
`;

export const PasswordToggleButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const NewPasswordField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 100%;
    display: flex;
    flex-direction: unset;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    justify-content: start;
    gap: 72px;
  }
`;

export const PasswordConfirmationError = styled.p`
  color: #ff0000;
  font: 600 18px 'Nunito Sans';
`;

export const SaveNewPasswordButton = styled.button`
  margin-top: 34px;
  width: 148px;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #43c550;
  font: 800 18px 'Nunito Sans';
  background-color: transparent;
  color: #43c550;
`;

export const DeleteProfileButton = styled.button`
  width: 264px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid #43c550;
  font: 700 22px 'Jost';
  line-height: 32px;
  color: #43c550;
  background-color: transparent;
`;
