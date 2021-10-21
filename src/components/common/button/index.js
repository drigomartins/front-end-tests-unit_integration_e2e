import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
    width: 111px;
    height: 33px;
    left: 1176px;
    top: 411px;
    background: ${({disabled}) => disabled ? '#9c9c9c' :'#000000'};
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    border: none;
    transition: 0.5s;
    &:active {
        transform: scale(0.9)
    }
`

export const Button = (props) => {
    return <CustomButton {...props}>{props.children}</CustomButton>
}
export default Button