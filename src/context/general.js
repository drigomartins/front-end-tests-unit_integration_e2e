import React, { createContext, useContext, useState } from 'react';

export const Context = createContext();

export default function DataProvider({ children }) {
    const [ data, setData ] = useState([]);

    return (
        <Context.Provider
            value={{
                data, setData
            }}
        >
            {children}
        </Context.Provider>
    );
}

export function useData() {
    const context = useContext(Context);
    const { data, setData } = context;
    return { data, setData };
}