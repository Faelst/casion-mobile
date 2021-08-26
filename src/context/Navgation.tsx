import React, { createContext, useContext, useState } from 'react'

interface NavContextInterface {
    _id: string;
    setNewIdProvider(_id: string): void
}

const NavigationContext: any = createContext<NavContextInterface>({} as NavContextInterface);

export const NavigationProvider: React.FC = ({ children }) => {
    const [newsId, setNewsId] = useState<String>("")

    const setNewIdProvider = (_id: String) => {
        setNewsId(_id) 
    }

    return (
        <NavigationContext.Provider value={{ _id: newsId, setNewIdProvider }}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContext