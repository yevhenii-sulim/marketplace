import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PersonalDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: ${props => props.$justifycontent || 'start'};
  gap: 74px;
`;

export const ProfilePageTitle = styled.h5`
  font-weight: 400;
  font-size: 28px;
  font-family: 'Jost';
  line-height: 42px;
`;

export const InputColumn = styled.div`
  width: ${props => props.width || '320px'};
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: #000;
    font: 600 18px 'Nunito Sans';
    line-height: 26px;
    &:after {
      content: '${props => props.required ? '*' : ''}';
      color: #ff0000;
    }
  }

  p {
    color: #000;
    font: 600 18px 'Nunito Sans';
    line-height: 26px;
  }
  
  input, select {
    display: block;
    width: 320px;
    height: 44px;
    border: 1px solid #8D8D8D;
    border-radius: 6px;
    padding: 12px;
    background-color: #FAFAFA;
    font: 400 16px 'Nunito Sans';
    line-height: 20px;
    outline: none;
  }

  span {
    font: 400 16px 'Nunito Sans';
    line-height: 20px;
  }

  input:focus {
    border: 3px solid #43C550;
    box-shadow: 0.3px 0.3px 5px 0px #43C550;
  }

  option {
    font: 400 16px 'Nunito Sans';
    line-height: 20px;
  }
`;

export const RedactContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const RedactButton = styled.button`
  width: 148px;
  height: 44px;
  border-radius: 6px;
  background-color: #43C550;
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
  color: #43C550;
  border: 1px solid #43C550;
  line-height: none;
`;

export const DateInput = styled.div`
  .MuiInputBase-root {
    height: 44px;
    background-color: #FAFAFA;
  }

  .MuiInputBase-input {
    width: 260px;
    border: none;
    padding: 0;
    padding-left: 10px;
  }
`;

export const ProfilePictureSelectField = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 123px;
  height: 123px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 50%;
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
    width: 320px;
    padding-left: 45px;
  }

  button {
    background: transparent;
    width: 44px;
    height: 44px;
  }
`;

export const PasswordToggleButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const NewPasswordField = styled.div`
  display: flex;
  gap: 72px;
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
  border: 1px solid #43C550;
  font: 800 18px 'Nunito Sans';
  background-color: transparent;
  color: #43C550;
`;

export const DeleteProfileButton = styled.button`
  width: 264px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid #43C550;
  font: 700 22px 'Jost';
  line-height: 32px;
  color: #43C550;
  background-color: transparent;
`;