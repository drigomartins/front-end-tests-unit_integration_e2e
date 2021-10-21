import React from 'react';
import styled from "styled-components";

const Root = styled.div`
    width: 100%;
    padding: 0px 15px;
    @media (min-width: 768px) {
        width: 750px;
        margin-left: calc(50% - 375px);
    }
    @media (min-width: 992px) {
        width: 970px;
        margin-left: calc(50% - 485px);
    }
    @media (min-width: 1200px) {
        width: 1170px;
        margin-left: calc(50% - 585px);
    }
`;

export const Container = (props) => {
    return <Root {...props}>{props.children}</Root>
}

export default Container;