import React from 'react'
import Navigation from './Navigation'

const Header = (props) => {
  return (
    <div>
        {/* <h1>This is {props.userDetails.name}</h1> */}
        <Navigation userDetails = {props.userDetails}/>
    </div>
  )
}

export default Header