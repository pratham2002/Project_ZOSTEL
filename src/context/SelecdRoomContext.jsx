import React, { createContext, useState } from 'react'

export const SelectRoomContext = createContext()

export const SelectRoomContextProvider = ({children}) => {

    const [selectRoomData, setSelectRoomData] = useState([])

  return (
    <SelectRoomContext.Provider value={{selectRoomData, setSelectRoomData}}>
        {children}
    </SelectRoomContext.Provider>
  )
}