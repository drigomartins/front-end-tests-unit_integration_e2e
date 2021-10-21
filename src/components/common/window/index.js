import React from "react";
import styled from "styled-components";
import Delete from "../../specific/delete";

const Content = styled.div`
    background: #FFFFFF;
    border: 1px solid ${({border}) => !border ? '#999999' : '#FFF'};
    padding: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-bottom: 25px;
`
const Topbar = styled.div`
    background: #000000;
    display: flex;
    justify-content: space-between;
    padding: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
`

export const Window = (props) => {
    return (
        <>
            {props.title && <Topbar id={`item-${props.id}`}>
                {props.title}
                {props.config && <Delete id={props.id}/>}
            </Topbar> }
            {props.children && <Content border={props.noBorder} id={`content-item-${props.id}`}>{props.children}</Content> }
        </>
    )
}
export default Window