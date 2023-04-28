import React from 'react'
import { useSelector } from 'react-redux'

const Mycards = () => {

  const reduxdata = useSelector((mystore) => {
    return mystore;
  });

  return (
    <div>
      {/* {console.log(reduxdata.Mycards)} */}
    </div>
  )
}

export default Mycards
