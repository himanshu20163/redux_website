import React from 'react'
import { useSelector } from 'react-redux'


const Love = () => {
    const takedata = useSelector((storedata)=>storedata)
  return (
    <div>
      jlfgjlkdsjglj
      {console.log(takedata)}
    </div>
  )
}

export default Love
