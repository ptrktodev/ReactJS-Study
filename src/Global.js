import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {

    const [contar2, setContar2] = React.useState(0)
    const [contar1, setContar1] = React.useState(0)
    const [dados, setDados] = React.useState(null)

    function contarUm() {
        setContar1(contar1 + 1 )
    }

    function contarDois() {
        setContar2(contar2 + 2 )
    }


    React.useEffect(() => {
        fetch('https://swapi.dev/api/people/?search=a&format=json')
            .then(response => response.json())
            .then((data) => {
                return data.results.map(item => {
                    return item.name
                })
            })
            .then(data => setDados(data))

    }, [])


    return (
        <GlobalContext.Provider value={{contar2, setContar2, contar1, setContar1, contarUm, contarDois, dados}}>
            {children}
        </GlobalContext.Provider>
    )
}