import React, { ReactNode, useState } from 'react';
import AppContext from '.';

interface ContextProviderProps {
    children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps>= ({ children }) => {
    const context = {
        test: 'hello there',
    }

    return (
        <AppContext.Provider value={ context }>
            {children}
        </AppContext.Provider>
    );
}

export default ContextProvider;