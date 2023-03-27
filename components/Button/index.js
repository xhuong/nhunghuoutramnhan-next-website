import { Button as AntButton } from "antd";
import styled from "styled-components";

const Button = styled(AntButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.25;
  text-transform: capitalize;
  height: 46px;
  transition: all 0.4s;

  border: none;

  ${(props) =>
    props.type === "primary" &&
    `
  color: #000000;
  background-color: #f0f0f0;
  

  &:hover,
  &:focus{
    color: #ffffff;
    background-color: #b71d21;
    border-color: #b71d21;
  }
  `}

  ${(props) =>
    props.type === "secondary" &&
    `
  border: none;
  color: #ffffff;
  background-color: #b71d21;
  border-radius: unset;

  &:hover,
  &:focus{
    color: #ffffff;
    background-color: #b71d21;
  }`}

  ${(props) =>
    props.type === "third" &&
    `
  border: none;
  color: #ffffff;
  background-color: #c8c8c8;
  border-radius: 6px;

  &:hover,
  &:focus{
    color: #ffffff;
    background-color: #c8c8c8;
  }`}

  ${(props) =>
    props.size === "sm-btn" &&
    `
  width: 54px;
  `}

  ${(props) =>
    props.size === "md-btn" &&
    `
  width: 86px;
  `}

  ${(props) =>
    props.size === "full-btn" &&
    `
  width: 100%;
  `}  
  ${(props) => props.textTransform === "uppercase" && `text-transform: uppercase;`}
`;

export default Button;
