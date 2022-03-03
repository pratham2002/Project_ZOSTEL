import React, { createContext, useState } from 'react'

export const DestinationContext = createContext()

export const DestinationContextProvider = ({children}) => {

    const [destinationData, setDestinationData] = useState({})

  return (
    <DestinationContext.Provider value={{destinationData, setDestinationData}}>
        {children}
    </DestinationContext.Provider>
  )
}
