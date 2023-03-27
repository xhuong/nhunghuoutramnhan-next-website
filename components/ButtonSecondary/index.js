import { Button as AntButton } from "antd";
import styled from "styled-components";

const ButtonSecondary = styled(AntButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;
  // border-radius: 4px;

  cursor: pointer;
  height: 46px;

  ${(props) =>
    props.type === "primary" &&
    `
  color: #b71d21;
  background-color: #ffffff;
  border: 0.2px solid #b71d21;
  `}

  ${(props) =>
    props.type === "secondary" &&
    `
  color: #ffffff;
  background-color: #b71d21;
  border: 0.2px solid #b71d21;
  position: relative;

  &:hover{
    color: #ffffff;
    background-color: #b71d21;
    border: unset;
    box-shadow: unset;
  }
  `}

  ${(props) =>
    props.type === "third" &&
    `
  color:#ffffff;
  background-color: #288ad6;
  border-radius: 4px;
  `}

  ${(props) =>
    props.type === "fourth" &&
    `
  color:#ffffff;
  background-color: #338dbc;
  border-radius: 4px;
  `}

  ${(props) =>
    props.size === "full-btn" &&
    `
  width: 100%;
  `}

  ${(props) =>
    props.boxShadow === true &&
    `
  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #ff0000;
    z-index: -1;
    top: 0;
    left: 0;
    transition: transform .5s ease;
  }
  &:hover:before{
    transform: translate(6px, 6px);
  }
  `}
`;

export default ButtonSecondary;
