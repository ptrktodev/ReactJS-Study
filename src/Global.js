import React from 'react'

export const GlobalContext = React.createContext()

export const globalStorage = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>
}
