import React, { useState } from "react";
import styled from "styled-components";
import { deleteIcon } from "../../../assets/svg/svg";

import { useData } from "../../../context/general";

const Button = styled.button`
    left: 1176px;
    top: 411px;
    background: transparent;
    border: none;
    transition: 0.5s;
    &:active {
        transform: scale(0.9)
    }
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    left: 0px;
    top: ${({open}) => open ? '0px' : '-100vh'};
    opacity: ${({open}) => open ? '1' : '0'};
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Shadow = styled.div`
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background:  ${({shadow}) => shadow ? 'rgba(119, 119, 119, 0.8)' : 'transparent'};
    transition: 0.5s;
    position: absolute;
`
const View = styled.div`
    width: 661px;
    padding: 25px;
    background: #FFFFFF;
    position: relative;
    opacity: ${({open}) => open ? '1' : '0'};
    z-index: 1;
`
const Title = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 25px;
`
const Align = styled.div`
    display: flex;
    justify-content: flex-end;
`
const ActionButton = styled.button`
    width: 111px;
    height: 33px;
    left: 1176px;
    top: 411px;
    background: #FFFFFF;
    border: 1px solid #000000;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-left: 10px;
    transition: 0.5s;
    &:active {
        transform: scale(0.9)
    }
`

export const Delete = (props) => {
    const [ box, setBox ] = useState(false)
    const { data, setData } = useData()

    const deleteValue = () => {
        setData(data.splice(props.id, 1))
        setBox(!box)
    }

    return (
        <>
            <Button onClick={() => setBox(!box)} id="open-box-delete">{deleteIcon}</Button>
            <Container open={box}>
                <View open={box}>
                    <Title>Are you sure you want to delete this item?</Title>
                    <Align>
                        <ActionButton onClick={() => setBox(!box)} id="close-box-delete">Cancel</ActionButton>
                        <ActionButton onClick={() => deleteValue()} id="delete-item">OK</ActionButton>
                    </Align>
                </View>
                <Shadow shadow={box}/>
            </Container>
        </>
    )
}
export default Delete