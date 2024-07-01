import React from 'react'

const Navigation = (props) => {
    console.log(props);
  return (
    <div>
        This is {props.userDetails.name} <br/>
        This is {props.userDetails.address}
    </div>
  )
}

export default Navigation