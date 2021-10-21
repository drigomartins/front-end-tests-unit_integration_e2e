import React from "react";

import Add from "../../components/specific/add";

import Window from "../../components/common/window";
import Container from "../../components/common/container";

import { useData } from "../../context/general";

export const Main = () => {
    const { data } = useData()

    return (
        <Container className="App-load">
            <Window
                title={'Martinho Network'}
                noBorder={true}
            >
                <Add/>
                {data && data.map((item, id) =>                 
                    <Window
                        id={id}
                        title={item?.title}
                        config
                    >
                        {item?.content}
                    </Window>
                )}
            </Window>
        </Container>
    )
}
export default Main