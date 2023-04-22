import React from 'react'
import Notes from './Notes'
import Login from './Login'
const Home = (props) => {
  return (
<>

{!localStorage.getItem("token")? (<Login showAlert={props.showAlert}/>) :(<Notes showAlert={props.showAlert}   />) }
    <div>
      
    </div></>
  )
}

export default Home
