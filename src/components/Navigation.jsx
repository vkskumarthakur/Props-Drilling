import React from 'react'

const Navigation = (props) => {
    console.log(props);
  return (
    <div>
      {/* here we are using the props data from the app.jsx */}
        This is {props.userDetails.name} <br/>
        This is {props.userDetails.address}
    </div>
  )
}

export default Navigation