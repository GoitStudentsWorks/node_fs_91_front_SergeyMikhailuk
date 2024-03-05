import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as eyeIcon } from '../../images/eye.svg';

export const AuthForm = styled(Form)`
  max-width: 335px;
  width: 100%;
  height: fit-content;
  padding: 24px;
  border-radius: 8px;
  background: rgba(31, 31, 31, 1);
   @media screen and (min-width: 767px) {
    max-width: 424px;
    padding: 40px;
  }
`;


export const AuthNav = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const RegisterLink = styled(Link)`
  margin-right: 14px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: white;
  cursor: inherit;
`;

export const LoginLink = styled(Link)`
  left: 160px;
  top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.3);

  &:hover,
  &:focus {
    color: #bedbb0;
  }
`;

export const RegisterLinkLog = styled(Link)`
  margin-right: 14px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 27px;

  &:hover,
  &:focus {
    color: #bedbb0;
  }
`;

export const LoginLinkLog = styled(Link)`
  top: 40px;
  left: 160px;
  letter-spacing: -0.02em;
  color: white;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 27px;
  cursor: inherit;
`;

export const AuthInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 49px;
  margin-bottom: 14px;
  padding: 14px 0px 14px 18px;
  outline: none;
  color: 1F1F1F;
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.4);
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);

  &:focus-within {
    border: 1px solid rgba(190, 219, 176, 1);
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #151515 inset;
    -webkit-text-fill-color: grey;
  }
`;

export const AuthField = styled(Field)`
  width: 100%;
  font-size: 14px;
  background: inherit;
  letter-spacing: -0.02em;
  border: none;
  line-height: 21px;
  outline: none;
  color: rgba(190, 219, 176, 1);
  &:focus {
    opacity: 1;
  }
  &:focus::placeholder {
    transition: opacity 0.3s ease-in-out;
    border: none;
  }
`;

export const AuthError = styled(ErrorMessage)`
  display: block;
  position: absolute;
  top: 0;
  right: 8px;
  font-size: 12px;
  border: none;
  margin-bottom: 20px;
  color: white;
`;
export const EyeSvg = styled(eyeIcon)`
  display: flex;
  top: 50%;
  transform: translate(-50%);
  fill: black;
  stroke: rgba(190, 219, 176, 1);
  cursor: pointer;
`;

export const EyeSvgDark = styled(eyeIcon)`
  display: flex;
  top: 50%;
  transform: translate(-50%);
  fill: black;
  stroke: rgba(255, 255, 255, 0.3);
  cursor: pointer;
`;

export const AuthButton = styled.button`
  color: rgba(22, 22, 22, 1);
  background-color: rgba(190, 219, 176, 1);
  width: 100%;
  height: 49px;
  margin-top: 10px;
  font-style: normal;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  line-height: 21px;
  letter-spacing: -0.02em;
  border: none;
  cursor: pointer;
  text-align: center;

  &:hover,
  &:focus,
  &:active {
    background: #a1cf89;
  }

  &:active {
    transform: scale(0.95);
  }
  
   @media screen and (min-width: 767px) {
    width: 344px;}

`;

