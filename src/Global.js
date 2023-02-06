import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {

    const [contar2, setContar2] = React.useState(0)
    const [contar1, setContar1] = React.useState(0)


    function contarUm() {
        setContar1(contar1 + 1 )
    }

    function contarDois() {
        setContar2(contar2 + 2 )
    }

    return (
        <GlobalContext.Provider value={{contar2, setContar2, contar1, setContar1, contarUm, contarDois}}>
            {children}
        </GlobalContext.Provider>
    )
}