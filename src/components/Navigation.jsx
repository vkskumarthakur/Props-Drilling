import React from 'react'
import { UserConsumer } from './UserContext';

const Navigation = (props) => {
    console.log(props);
  return (
    <UserConsumer>
      {(user)=><h1>My name is {user.name} and i am from {user.address}</h1>}
    </UserConsumer>
  )
}

export default Navigation