import React, { createContext, useEffect, useState } from 'react'

export const SelectRoomContext = createContext()

export const SelectRoomContextProvider = ({children}) => {

    const [selectRoomData, setSelectRoomData] = useState([])

    console.log(selectRoomData)

  return (
    <SelectRoomContext.Provider value={{selectRoomData, setSelectRoomData}}>
        {children}
    </SelectRoomContext.Provider>
  )
}