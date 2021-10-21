import React, { useState } from "react";
import styled from "styled-components";

import { useData } from "../../../context/general";

import Window from "../../common/window";
import Button from "../../common/button";

const Title = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: #000000;
`
const Label = styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`
const Input = styled.input`
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #777777;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 5px;
    margin-bottom: 20px;
`
const Textarea = styled.textarea`
    width: 100%;
    height: 74px;
    background: #FFFFFF;
    border: 1px solid #777777;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 5px;
    margin-bottom: 20px;
`
const Align = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Add = () => {
    const [ form, setForm ] = useState()
    const { data, setData } = useData()

    const send = () => {
        setData([...data, form])
        setForm()
    }

    const validateForm = () => {
        return (form?.title && form?.content) ? (
            <Button onClick={() => send()} id="input-add">CREATE</Button>
        ) : (
            <Button disabled>CREATE</Button>
        )
    }

    return (
        <Window>
            <Title>What’s on your mind?</Title>
            <Label>Title</Label>
            <Input
                id="input-title"
                value={form?.title || ''}
                onChange={(e) => setForm({...form, title: e.target.value})}
                placeholder="Hello world"
            />
            <Label>Content</Label>
            <Textarea
                id="input-content"
                value={form?.content || ''}
                onChange={(e) => setForm({...form, content: e.target.value})}
                placeholder="Content here"
            />
            <Align>
                {validateForm()}
            </Align>
        </Window>
    )
}
export default Add