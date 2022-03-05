import React, { createContext, useState } from 'react'

export const DestinationContext = createContext()

export const DestinationContextProvider = ({children}) => {

  let localData = JSON.parse(localStorage.getItem("data"))

  const [destinationData, setDestinationData] = useState(localData)

  return (
    <DestinationContext.Provider value={{destinationData, setDestinationData}}>
        {children}
    </DestinationContext.Provider>
  )
}
